'use client'
import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { MotionDiv } from './MotionDiv'

interface Gallery{
    images:any
}
export default function ImageGallery({images}:Gallery) {
    const [bigImage,setBigImage]=useState(images[0])
    const handelImageClick=(image:any)=>{
        
        setBigImage(image)
    }
  return (
    <MotionDiv className='grid md:grid-cols-5 gap-4 ' initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}}>
    <div className='order-last md:order-first flex md:flex-col gap-4 overflow-hidden '>
    {
        images.map((image:any,index:number)=>(
            <div className={image===bigImage?'overflow-hidden rounded-lg bg-gray-100 shadow-lg border-2 border-primary ':'overflow-hidden rounded-lg bg-gray-100 shadow-lg opacity-65 '} key={index}>
             <Image src={urlFor(image).url()} alt='product image' width={100} height={100} className='h-full w-full object-center object-cover cursor-pointer' onClick={()=>handelImageClick(image)}/>

            </div>
        ))
    }
    </div>

    <div className='relative overflow-hidden rounded-lg bg-gray-100 shadow-md md:col-span-4 '>
    <Image src={urlFor(bigImage).url()} alt='product image' width={200} height={200} className='h-full w-full object-center object-cover cursor-pointer'/>
    <Badge variant="destructive" className='absolute text-white left-2 top-2 text-lg'>Sale</Badge>
    </div>
    </MotionDiv>
  )
}
