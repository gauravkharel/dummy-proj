"use client"

import { useFetch } from '@/hooks/use-fetch';
import { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/Pagination"
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/AspectRatio';
import { Card } from './ui/Card';


const Products = ({ }) => {
    const [serverUrl, setServerUrl] = useState("https://dummyjson.com/products");
    const { data, isPending, error, refetch, undofetch } = useFetch(serverUrl);

    function discountedAmout(price, discountPercentage) {
        const newAmount = Math.round(price - (price * discountPercentage / 100))
        return newAmount
    }

    return (
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8'>
                {!isPending && !error && data && data.products.map((product) =>
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <AspectRatio ratio={16 / 9} >
                            <Image src={product.thumbnail} alt={product.description} fill={true} />
                        </AspectRatio>
                        <div className='pt-2'>
                            <span className='font-medium text-lg'>{product.brand}  </span>
                            <span className='px-2 py-3 bg-blue-100 text-gray-400 border-slate font-medium text-xs rounded-lg'>{product.category}</span> <br />
                            <span>{product.title}</span> <br />
                            <span className='line-through'>${product.price}</span>
                            <span className='font-medium text-lg'> ${discountedAmout(product.price, product.discountPercentage)}</span>
                        </div>
                    </Link>
                )}
            </div>
            {!isPending && !error && <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious aria-disabled onClick={undofetch} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={refetch} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>}
        </div>
    )
}

export default Products