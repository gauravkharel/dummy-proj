import CategoryProduct from '@/components/CategoryProduct'
import { Card } from '@/components/ui/Card'

interface pageProps {
  params: {
    category: string
  }
}

const page = ({ params }: { params: { category: string } }) => {
  return <Card>
    <CategoryProduct category={params.category} />
  </Card>
}

export default page