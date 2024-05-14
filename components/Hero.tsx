
import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MotionDiv } from './MotionDiv';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
const getData=async()=>{
    const data=await client.fetch(`*[_type == 'heroImage'][0]`);
    return data;
}
export default async function Hero() {
    const data=await getData()
  return (
    <div className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
<div className='flex justify-between flex-wrap mb-8 md:mb-16'>
<MotionDiv initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}}  className='mb-6 flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
<h1  className='mb-4 font-bold text-4xl sm:text-5xl md:mb-8 md:text-6xl'>
Top fashon for top price
</h1>
<p className='text-muted-foreground leading-relaxed max-w-md xl:text-lg'>
    we sell only the most exclusive and high quality products for you. we arethe best so come shop whith us
</p>
<Link href={'/all'} className='text-sm sm:text-xl font-bold flex justify-center items-center gap-3 w-1/2 bg-primary text-white py-4 rounded-md shadow-md mt-4'>
    <span >Shop Now </span>
    <ArrowRight/>
</Link>

</MotionDiv>
<MotionDiv initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}} className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
<div className='relative left-12 top-12 z-10 overflow-hidden -ml-12 rounded-lg shadow-lg bg-gray-100 md:left-16 md:top-16 lg:ml-0'>
<Image src={urlFor(data.image1).url()} alt='Hero' width={500} height={500} className='h-full w-full object-cover object-center '/>

</div>
<div className='overflow-hidden  bg-gray-100 shadow-lg rounded-lg'>
<Image src={urlFor(data.image2).url()} alt='Hero' width={500} height={500} className='h-full w-full object-cover object-center '/>
</div>
</MotionDiv>
</div>

    </div>
  )
}
