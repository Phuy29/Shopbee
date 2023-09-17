import { Shell } from './shell'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { Link } from 'react-router-dom'
import { useProductsQuery } from '@/services/products/products-query'
import { ProductCard } from './cards/product-card'
import { useStoresQuery } from '@/services/stores/stores-query'
import { StoreCard } from './cards/store-card'

const LandingPage = () => {
  const { data: products } = useProductsQuery()
  const { data: stores } = useStoresQuery()

  return (
    <Shell className='gap-12'>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28'
      >
        <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
          Welcome to Shopbee, an e-commerce built from FPT Polytechnic
        </h1>
        <p className='max-w-[46rem] text-sm text-muted-foreground sm:text-xl'>
          Discover a world of endless shopping possibilities with our diverse selection of products, unbeatable deals,
          and seamless shopping experience
        </p>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link to='/products' className={cn(buttonVariants())}>
            Buy now
            <span className='sr-only'>Buy now</span>
          </Link>
          <Link
            to='/dashboard/stores'
            className={cn(
              buttonVariants({
                variant: 'outline'
              })
            )}
          >
            Sell now
            <span className='sr-only'>Sell now</span>
          </Link>
        </div>
      </section>
      <section id='featured-products' aria-labelledby='featured-products-heading' className='space-y-6'>
        <div className='flex items-center'>
          <h2 className='flex-1 text-2xl font-medium sm:text-3xl'>Featured products</h2>
          <Link
            to='/products'
            className={cn(
              buttonVariants({
                size: 'sm'
              })
            )}
          >
            View all
            <span className='sr-only'>View all products</span>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products?.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <section id='featured-stores' aria-labelledby='featured-stores-heading' className='space-y-6'>
        <div className='flex items-center'>
          <h2 className='flex-1 text-2xl font-medium sm:text-3xl'>Featured stores</h2>
          <Link
            to='/stores'
            className={cn(
              buttonVariants({
                size: 'sm'
              })
            )}
          >
            View all
            <span className='sr-only'>View all stores</span>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {stores?.slice(0, 4).map((store) => <StoreCard key={store.id} store={store} />)}
        </div>
      </section>
    </Shell>
  )
}

export default LandingPage
