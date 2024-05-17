
import { client } from '@/app/lib/sanity';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AddToBag from './AddToBag';
import MotionContainer from './MotionContainer';
interface Product{
    id:string;
    price:number;
    discount:number;
    name:string;
    slug:string;
    categoryName:string;
    imageUrl:string
}

async function getData() {
    const query = `*[_type == "product" ][0...4] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          discount,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;
  
    const data:Product[] = await client.fetch(query);
  
    return data;
  }
export default async function Newest(scrollRef:any) {
    const products:Product[]=await getData();
  return (

   <MotionContainer>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8'>
    <div className='flex  justify-between items-center'>
   <h2 className='text-2xl font-bold  tracking-tight '>
    Our newest products
   </h2>
   <Link href={'/all'} className='font-medium text-primary  flex items-center gap-x-1'>See All<span><ArrowRight/></span></Link>
    </div>

    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    
        {
            products.map((product)=>(
               
               
                     <div className='group relative cursor-pointer' key={product.id}>
                         <Link href={'/product/'+product.slug}>
                <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-88'>
                 <Image src={product.imageUrl} width={300} height={300} className='w-full h-full object-center object-cover lg:h-full lg:w-full' alt={product.slug} />
                </div>
                <div className='my-3 flex justify-between items-center '>
                
                    <h3 className=' font-semibold text-sm  line-clamp-1 '>
                       
                         {product.name}
                     
                    </h3>
                
                <p className='font-bold    text-sm  '>{product.price-product.discount} DA</p>
                </div>
                </Link>
               <AddToBag  currency='DA' name={product.name} image={product.imageUrl} price={product.price} discount={product.discount} id={product.id} key={product.id}/>
               
              </div>
                
              
               
            ))
        }
   
    </div>
    </div>

   </MotionContainer>
  )
}
