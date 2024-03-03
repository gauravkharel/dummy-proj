"use client"

import { useState } from 'react'
import Link from 'next/link';
import { useSingleFetch } from '@/hooks/use-single-fetch';
import { formatTitle } from '@/lib/utitlity';
import PieChart from './PieChart';

const Category = ({ }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/categories`)
    const { data, isPending, error } = useSingleFetch(serverUrl);
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='pl-5 w-1/3 h-screen bg-gray-100 flex flex-col pt-4' suppressHydrationWarning>
            <PieChart />
            <div className='pt-3 text-xl font-medium text-gray-500  '>Categories</div>
            <div className='flex flex-col gap-3 mt-3 '>

            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {!isPending && !error && data &&
                data.map(category => {
                    return (
                        <Link className="text-gray-500 font-light  hover:text-gray-600 hover:font-medium" href={`/product/category/${category}`} key={category.id}>
                            {formatTitle(category)}
                        </Link>)
                })
            }
            </div>
        </div>
    )
}

export default Category