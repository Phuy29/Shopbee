import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from '@/components/layout/main-nav'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <div className='container flex h-16 items-center'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Link
              to='/signin'
              className={buttonVariants({
                size: 'sm'
              })}
            >
              Sign In
              <span className='sr-only'>Sign In</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
