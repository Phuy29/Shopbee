import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient({
  log: ['error'],
});

const roundsOfHashing = 10;

async function seed() {
  const passwordUser1 = await bcrypt.hash('shopbee@123', roundsOfHashing);
  const passwordUser2 = await bcrypt.hash('shopbee@123', roundsOfHashing);

  // Create users
  const users = [];
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@gmail.com' },
    update: {
      password: passwordUser1,
    },
    create: {
      email: 'user1@gmail.com',
      name: 'User 1',
      password: passwordUser1,
    },
  });

  users.push(user1);

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@gamil.com' },
    update: {
      password: passwordUser2,
    },
    create: {
      email: 'user2@gamil.com',
      name: 'User 2',
      password: passwordUser2,
    },
  });

  users.push(user2);

  const stores = [];
  // Create stores and products
  const storeCountPerUser = 3;
  for (const user of users) {
    for (let i = 0; i < storeCountPerUser; i++) {
      const store = await prisma.store.create({
        data: {
          name: faker.company.name(),
          description: faker.lorem.sentence(),
          userId: user.id,
        },
      });
      stores.push(store);
    }
  }

  const products = [];
  const productCountPerStore = 3;
  for (const store of stores) {
    for (let i = 0; i < productCountPerStore; i++) {
      const product = await prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: parseFloat(
            faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
          ),
          images: [faker.image.url()],
          storeId: store.id,
        },
      });
      products.push(product);
    }
  }
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
