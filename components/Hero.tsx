'use client'
import {  urlFor } from '@/app/lib/sanity';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MotionDiv } from './MotionDiv';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { getHeroImages } from '@/actions/products';
import { useRouter } from 'next/navigation';

export default  function Hero() {
    const [data, setData] = useState<any>()
   const router=useRouter()
    useEffect(() => {
  const  fetchImages=async()=>{
        try {
              const data=await getHeroImages()
              setData(data)
        } catch (error) {
            
        }
    }
    fetchImages()
    }, [])
    
  return (
    <div className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 overflow-hidden'>
<div className='grid md:grid-cols-2 gap-x-4 gap-y-8'>
<MotionDiv  initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}}  className='flex flex-col items-center md:items-start space-y-4'>
<h1  className='font-bold text-6xl text-center md:text-left'>
Top fashon for top price
</h1>
<p className='text-muted-foreground text-center md:text-left'>
    we sell only the most exclusive and high quality products for you. we arethe best so come shop whith us
</p>
<Button size={'lg'} className='text-xl gap-x-2' onClick={()=>router.push('/all')}>
Shop Now 
<ArrowRight/>
</Button>

</MotionDiv>
{
    data!==undefined && <MotionDiv initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}} className='mb-12 flex w-full '>
    <div className='relative left-12 top-12 z-10 overflow-hidden -ml-12 rounded-lg shadow-lg bg-gray-100 md:left-16 md:top-16 lg:ml-0'>
    <Image src={urlFor(data?.image1).url()} alt='Hero' width={500} height={500} className='h-full w-full object-cover object-center '/>
    
    </div>
    <div className='overflow-hidden  bg-gray-100 shadow-lg rounded-lg'>
    <Image src={urlFor(data?.image2).url()} alt='Hero' width={500} height={500} className='h-full w-full object-cover object-center '/>
    </div>
    </MotionDiv>
}
</div>

    </div>
  )
}
