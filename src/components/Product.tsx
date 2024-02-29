'use client'
import { useSingleFetch } from '@/hooks/use-single-fetch';

const Product = ({ productId }) => {
    const { data, isPending, error } = useSingleFetch(productId);
    return (
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data && <div key={data.id}>
                {data.title}
            </div>}
        </div>

    )
}

export default Product