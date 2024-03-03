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
import { ProductCard } from './Products';
import { formatTitle } from '@/lib/utitlity';
import { Loader } from './Loader';


const CategoryProduct = ({ category }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/category`);
    const { data, isPending, error, refetch, undofetch } = useFetch(serverUrl, 0, category);
    const categoryName = formatTitle(category)
    return (
        <div>
            <div className='text-base md:text-lg lg:text-xl font-medium lg:mt-3 md:mt-4 mt-5'>Shop {categoryName} category</div>
            <div className='text-base md:text-lg lg:text-lg font-light mb-3'>Browse your favourites</div>
            {isPending && <div className='grid grid-cols-3'>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
            </div>}
            {error && <div>{error}</div>}
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 pt-4'>
                {!isPending && !error && data && data.products.map((product) =>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        thumbnail={product.thumbnail}
                        description={product.description}
                        brand={product.brand}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                    />
                )}
            </div>
            {/* {!isPending && !error && <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={undofetch} />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext onClick={refetch} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            } */}
        </div>
    )
}

export default CategoryProduct