
import { client } from '@/app/lib/sanity';
import AddToBag from '@/components/AddToBag';
import CheckOut from '@/components/CheckOut';
import ImageGallery from '@/components/ImageGallery';
import { MotionDiv } from '@/components/MotionDiv';


import { Truck } from 'lucide-react';
import React from 'react'

interface Product{
  id:string;
  name:string;
  price:number;
  discount:number;
  description:string;
  slug:string;
  categoryName:string
  images:any;

}
const getData=async(slug:string)=>{
    const query=`*[_type == 'product'&&  slug.current=='${slug}' ][0]{
        _id,
          name,
          price,
          discount,
          description,
          "slug":slug.current,
          images,
          "categoryName":category->name
        
      }`
      const data:Product=await client.fetch(query);
      return data;
}
export default async function ProductPage({params}:{params:{slug:string}}) {
    const data:Product=await getData( params.slug)
  return (
    <div className='mb-6 overflow-hidden'>
    <div className='mx-auto  max-w-screen-xl px-4 md:px-8 '>
    <div className='grid gap-8 md:grid-cols-2'>
    <ImageGallery images={data.images}/>
    <MotionDiv initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}} className='md:py-8'>
        <div className='mb-2 md:mb-3'>
       
         <h2 className='font-bold text-3xl  lg:text-4xl'>
            {data.name}
         </h2>

        
         
        </div>
    <div className='mb-4'>
   <div className='flex items-end gap-2'>
    <span className='font-bold text-2xl lg:text-3xl'>{data.price>data.discount && data.discount>0 ?data.price-data.discount:data.price} DA</span>
    {data.price>data.discount && data.discount>0 && <span className='mb-0.5 text-red-500 line-through font-bold text-lg lg:text-xl'>{data.price} DA</span>}
   </div>

   <div className='text-muted-foreground my-1 flex gap-2 items-center font-medium'>
    <Truck/> free shipping

   </div>
    
    <div className='flex gap-2'>
    <AddToBag id={data.id} name={data.name} price={data.price} discount={data.discount}  image={data.images[0]} currency={'DA'} key={data.id} />
  <CheckOut  total={data.price-data.discount}  />
    </div>
    <div className='text-base text-muted-foreground mt-8 tracking-wide'>
        {data.description}
    </div>
    </div>
    </MotionDiv>
    </div>
    </div>
    </div>
  )
}
