import Products from '@/components/Products'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Products />
    </div>
}

export default page