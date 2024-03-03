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
import { ArrowLeft } from 'lucide-react';
import { Loader } from './Loader';
import { Button } from './ui/Button';
import { useToast } from '@/hooks/use-toast';

const Product = ({ productId }) => {
    const [serverUrl, setServerUrl] = useState(`https://dummyjson.com/products/${productId}`);
    const { data, isPending, error } = useSingleFetch(serverUrl);
    const { toast } = useToast()

    const handleClick = () => {
        toast({
            title: `${data.title} is added to cart.`,
            description: `Happy shopping with dummy shop ❤️`,
        })
    }
    return (
        <div >
            <Link href={'/product'} className='flex flex-row font-medium text-lg text-gray-600 pb-4'><ArrowLeft />  go back to product listing </Link>
            {isPending && <Loader />}
            {error && <div>{error}</div>}
            {data && <Card className='flex flex-row p-6 gap-[100px] pl-12' key={data.id}>
                {/* <AspectRatio ratio={16/9} >
                    <Image src={data.thumbnail} alt={data.description} fill={true} />
                </AspectRatio> */}
                <Carousel
                    className="w-full max-w-xs">
                    <CarouselContent>
                        {data.images.map((image, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image src={image} alt='diauds' fill={true} />
                                            </CardContent>
                                            hi
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <section>
                    <h2 className='text-lg font-light '>From {data.category} category</h2>
                    <span className='text-xl font-medium'>{data.title}</span>
                    <h1 className='text-lg font-bold' >By {data.brand}</h1>
                    <p className='text-md '>{data.description} </p>
                    <div className='my-2'>
                        <span className='line-through'>${data.price}</span>
                        <span className='font-medium text-lg'> ${discountedAmout(data.price, data.discountPercentage)}</span><br />
                        <span className='pb-3'>Stock: Only <span className='font-medium text-lg'>{data.stock} pieces</span> left</span><br />
                        <div className='flex flex-row align-middle '>
                            <Rating readOnly style={{ maxWidth: 150 }} value={data.rating} />
                            <span className='text-lg text-gray-400'> . {data.rating} in 5 stars.</span>
                        </div><br />
                    </div>

                    <Button className='bg-gray-100' variant='outline' size='lg' onClick={handleClick} >Add to Cart</Button>
                </section>

            </Card>}
        </div>

    )
}

export default Product