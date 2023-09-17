import * as React from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Product } from '@/types/product'
import { cn, formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Pick<Product, 'id' | 'name' | 'price' | 'images' | 'category' | 'inventory'>
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  return (
    <Card className={cn('h-full overflow-hidden rounded-sm', className)} {...props}>
      <Link to={`/product/${product.id}`}>
        <CardHeader className='border-b p-0'>
          <AspectRatio ratio={4 / 3}>
            {product?.images?.length ? (
              <img
                src={``}
                className='object-cover'
                sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                loading='lazy'
              />
            ) : (
              <div
                aria-label='Placeholder'
                role='img'
                aria-roledescription='placeholder'
                className='flex h-full w-full items-center justify-center bg-secondary'
              >
                <Icons.placeholder className='h-9 w-9 text-muted-foreground' aria-hidden='true' />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <span className='sr-only'>{product.name}</span>
      </Link>
      <Link to={`/product/${product.id}`} tabIndex={-1}>
        <CardContent className='grid gap-2.5 p-4'>
          <CardTitle className='line-clamp-1'>{product.name}</CardTitle>
          <CardDescription className='line-clamp-2'>{formatPrice(product.price)}</CardDescription>
        </CardContent>
      </Link>
      <CardFooter className='p-4'>
        <Button aria-label='Add to cart' size='sm' className='h-8 w-full rounded-sm'>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
