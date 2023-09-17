import { API_URL } from '@/config/contants'
import { Product } from '@/types/product'
import { useQuery } from 'react-query'

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`)

  if (!res.ok) throw new Error('Failed!')

  const data = await res.json()
  return data
}

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts()
  })
}
