"use client"

import { useFetch } from '@/hooks/use-fetch';
import { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/Pagination"
import Link from 'next/link';

interface pageProps {

}

const Products = ({ }) => {
    const [url, setUrl] = useState('https://dummyjson.com/products');
    const { data, isPending, error, refetch, undoFetch } = useFetch(url);
    return (
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            <ul>
                {!isPending && !error && data && data.products.map((product) =>
                    <li key={product.id}>{product.title}</li>
                )}
            </ul>
            {!isPending && !error && <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious aria-disabled onClick={undoFetch} />
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