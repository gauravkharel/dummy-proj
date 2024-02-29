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

const Products = ({ }) => {
    const { data, isPending, error, refetch, undofetch } = useFetch();
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