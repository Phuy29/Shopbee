import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Store } from '@/types/store'

interface StoreCardProps {
  store: Store
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <Link to={'store'}>
      <Card className='h-full overflow-hidden'>
        <CardHeader>
          <CardTitle className='line-clamp-1 text-lg'>{store.name}</CardTitle>
          {store.description ? <CardDescription className='line-clamp-2'>{store.description}</CardDescription> : null}
        </CardHeader>
      </Card>
      <span className='sr-only'>{store.name}</span>
    </Link>
  )
}
