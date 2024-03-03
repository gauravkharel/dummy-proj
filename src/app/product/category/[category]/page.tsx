import CategoryProduct from '@/components/CategoryProduct'
import { Card } from '@/components/ui/Card'

interface pageProps {
  params: {
    category: string
  }
}

const page = ({ params }: { params: { category: string } }) => {
  return <div className='m-2'>
    <CategoryProduct category={params.category} />
  </div>
}

export default page