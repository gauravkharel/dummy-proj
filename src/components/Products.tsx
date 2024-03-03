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
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { discountedAmout } from '@/lib/utitlity';
import { Loader } from './Loader';

const Products = ({ }) => {
    const [serverUrl, setServerUrl] = useState("https://dummyjson.com/products");
    const { data, isPending, error, refetch, undofetch } = useFetch(serverUrl);


    return (
        <div>
            <div className=' text-base md:text-lg lg:text-xl font-medium lg:mt-3 md:mt-4 mt-5'>All Products</div>
            <div className='text-base md:text-lg lg:text-lg font-light mb-3'>Browse your favourites</div>
            {isPending && <div className='grid grid-cols-4'>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
            </div>}
            {error && <div>{error}</div>}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8'>
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
            {data && <Pagination>
                <PaginationContent className='py-4'>
                    <PaginationItem>
                        <PaginationPrevious className='font-medium text-lg' aria-disabled onClick={undofetch} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext className='font-medium text-lg' onClick={refetch} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>}
        </div>
    )
}

export const ProductCard = ({ id, thumbnail, description, brand, title, price, category, discountPercentage, rating }) => {
    return (
        <Link className=' hover:border hover:rounded-md hover:p-4 hover:border-pink-100 bg-blend-lighten hover:bg-blend-darken' key={id} href={`/product/${id}`}>
            <AspectRatio ratio={16 / 9} >
                <Image src={thumbnail} alt={description} fill={true} />
            </AspectRatio>
            <div className='pt-2'>
                <span className='font-medium text-lg'>{brand}  </span>
                <span className='px-2 py-2 bg-blue-100 text-gray-400 border-slate font-medium text-xs rounded-lg'>{category}</span> <br />
                <span>{title}</span> <br />
                <span className='font-medium text-lg'> ${discountedAmout(price, discountPercentage)}</span>
                <span className='line-through font-light text-md'>   ${price}</span>
                <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
            </div>
        </Link>
    )
}

export default Products