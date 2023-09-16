import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import LandingPage from '@/components/landing-page'

export const AppRoutes = () => {
  const isAuth = false

  const commonRoutes = [{ path: '/', element: <LandingPage /> }]

  const routes = isAuth ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
