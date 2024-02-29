import Product from '@/components/Product'
import { FC } from 'react'

const page = ({ params }: { params: { productid: string } }) => {
  return <div><Product productId={params.productid} /></div>
}

export default page