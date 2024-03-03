import Category from '@/components/Category'
import { FC } from 'react'
import dynamic from 'next/dynamic'
import Products from '@/components/Products'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='w-3/4' suppressHydrationWarning>
    <Products />
  </div>
}

export default page