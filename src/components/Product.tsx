'use client'
import { useSingleFetch } from '@/hooks/use-single-fetch';
import Link from 'next/link';
import { useState } from 'react';

const Product = ({ productId }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/${productId}`);
    const { data, isPending, error } = useSingleFetch(serverUrl);

    return (
        <div >
            <Link href={'/product'}>Go back to product listing - </Link>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data && <div key={data.id}>
                {data.title}
            </div>}
        </div>

    )
}

export default Product