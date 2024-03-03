import Products from '@/components/Products'
import { Suspense } from 'react'
interface pageProps {

}

const page = ({ }) => {
    return (
        <section>
            <Suspense fallback={<p>Loading products..</p>}>
                <Products />
            </Suspense>
        </section>
    )
}

export default page