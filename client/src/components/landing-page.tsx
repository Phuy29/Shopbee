import React from 'react'
import { SiteHeader } from './layout/header'
import { SiteFooter } from './layout/footer'
import { Shell } from './shell'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader />
      <main className='flex-1'>
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
              Discover a world of endless shopping possibilities with our diverse selection of products, unbeatable
              deals, and seamless shopping experience
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
        </Shell>
      </main>
      <SiteFooter />
    </div>
  )
}

export default LandingPage
