"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useFetchCategory } from '@/hooks/use-category-fetch';

const Category = ({ }) => {
    const [url, setUrl] = useState(`https://dummyjson.com/products/categories`)
    const { data, isPending, error } = useFetchCategory(url);
    console.log(data)
    function tweakFunction(str) {
        str = str.replace(/-/g, ' ').charAt(0).toUpperCase() + str.slice(1);
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className='relative mt-10 w-1/4 h-screen bg-pink-100 flex flex-col justify-center'>
            <div><span className='font-medium text-xl'>Browse by category</span></div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            <div className='flex flex-col gap-3'>
                {!isPending && !error && data  &&
                data.map(category => {
                    return <div className='font-medium text-lg' key={category.id}>
                        {category.replace(/-/g, ' ').charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default Category