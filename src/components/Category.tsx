"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useSingleFetch } from '@/hooks/use-single-fetch';

const Category = ({ }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/categories`)
    const { data, isPending, error } = useSingleFetch(serverUrl);
    function tweakFunction(str) {
        str = str.replace(/-/g, ' ').charAt(0).toUpperCase() + str.slice(1);
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className='relative mt-10 w-1/4 h-screen bg-pink-100 flex flex-col justify-center' suppressHydrationWarning>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
                {!isPending && !error && data &&
                    data.map(category => {
                        return (
                        <Link href={`/product/category/${category}`} className='font-medium text-lg' key={category.id}>
                            {tweakFunction(category)}
                        </Link>)
                    })
                }
        </div>
    )
}

export default Category