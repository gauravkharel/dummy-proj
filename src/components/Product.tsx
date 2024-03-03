'use client'

import { useSingleFetch } from '@/hooks/use-single-fetch';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from './ui/Card';
import { AspectRatio } from './ui/AspectRatio';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/Carousel"
import Image from 'next/image';
import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'
import { discountedAmout } from '@/lib/utitlity';

const Product = ({ productId }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/${productId}`);
    const { data, isPending, error } = useSingleFetch(serverUrl);

    return (
        <div >
            <Link href={'/product'}>Go back to product listing - </Link>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data && <Card key={data.id}>
                {/* <AspectRatio ratio={16/9} >
                    <Image src={data.thumbnail} alt={data.description} fill={true} />
                </AspectRatio> */}
                <Carousel
                    className="w-full max-w-xs">
                    <CarouselContent>
                        {data.images.map((image) => {
                            return (
                                <CarouselItem key={image}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image src={image} alt={data.description} fill={true} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {data.brand} {data.category}
                {data.title}  <br />
                {data.description} <br />
                <span className='line-through'>${data.price}</span>
                <span className='font-medium text-lg'> ${discountedAmout(data.price, data.discountPercentage)}</span>
                <br />
                {data.rating} <br />
                <span>Only {data.stock} left</span>

                <Rating readOnly style={{ maxWidth: 150 }} value={data.rating} />

            </Card>}
        </div>

    )
}

export default Product