import { Outlet, useRoutes } from 'react-router-dom'
import React from 'react'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import LandingPage from '@/components/landing-page'
import ProductsPage from '@/pages/products/products'
import ProductPage from '@/pages/products/product'
import MainLayout from '@/components/layout'
import { Spinner } from '@/components/Spinner'

const App = () => {
  return (
    <MainLayout>
      <React.Suspense
        fallback={
          <div className='h-full w-full flex items-center justify-center'>
            <Spinner size='xl' />
          </div>
        }
      >
        <Outlet />
      </React.Suspense>
    </MainLayout>
  )
}

export const AppRoutes = () => {
  const isAuth = false

  const commonRoutes = [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/products', element: <ProductsPage /> },
        { path: '/product/:id', element: <ProductPage /> }
      ]
    }
  ]

  const routes = isAuth ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
