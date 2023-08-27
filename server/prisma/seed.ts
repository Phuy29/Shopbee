import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error'],
});

async function seed() {
  // Create users
  const userCount = 5;
  const users = [];
  for (let i = 0; i < userCount; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        stores: {
          create: [],
        },
      },
    });
    users.push(user);
  }

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
          price: parseFloat(faker.commerce.price()),
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
