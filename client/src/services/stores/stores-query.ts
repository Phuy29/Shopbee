import { API_URL } from '@/config/contants'
import { Store } from '@/types/store'
import { useQuery } from 'react-query'

export const getStores = async (): Promise<Store[]> => {
  const res = await fetch(`${API_URL}/stores`)

  if (!res.ok) throw new Error('Failed!')

  const data = await res.json()
  return data
}

export const useStoresQuery = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => getStores()
  })
}
