"use client"

import { useState } from 'react'
import Link from 'next/link';
import { useSingleFetch } from '@/hooks/use-single-fetch';
import { formatTitle } from '@/lib/utitlity';

const Category = ({ }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/categories`)
    const { data, isPending, error } = useSingleFetch(serverUrl);

    return (
        <div className='pl-5 w-1/4 h-screen bg-pink-100 flex flex-col pt-4' suppressHydrationWarning>
            <div className='text-xl font-medium text-gray-500  '>Categories</div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {!isPending && !error && data &&
                data.map(category => {
                    return (
                        <Link className="text-gray-400 font-light" href={`/product/category/${category}`} className='font-medium text-lg' key={category.id}>
                            {formatTitle(category)}
                        </Link>)
                })
            }
        </div>
    )
}

export default Category