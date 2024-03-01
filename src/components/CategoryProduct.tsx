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


const CategoryProduct = ({category}) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/category`);
    const { data, isPending, error, refetch, undofetch } = useFetch(serverUrl, 0, category);
    return (
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                {!isPending && !error && data && data.products.map((product) =>
                    <Link key={product.id} href={`/product/${product.id}`}>
                        {product.title}
                    </Link>
                )}
            </div>
            {!isPending && !error && <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={undofetch} />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext onClick={refetch} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>}
        </div>
    )
}

export default CategoryProduct