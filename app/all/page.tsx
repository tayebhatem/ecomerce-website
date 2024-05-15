import React from 'react'
import { client } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import AddToBag from '@/components/AddToBag';

interface Product{
    id:string;
    name:string;
    price:number;
    discount:number;
    slug:string;
    categoryName:string
    imageUrl:string;
  
  }
const getData=async()=>{
    const query = `*[_type == "product" ] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          discount,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }

`;
      const data:Product[]=await client.fetch(query);
      return data;
}
export default async function AllPage() {
    
    const products=await getData();
   
  return (
    <div className=''>
    <div className='mx-auto max-w-2xl px-4   lg:max-w-7xl lg:px-8'>
    <div className='flex  items-center gap-4'>
   <h2 className='text-2xl font-bold  tracking-tight '>
    Our all products 
   </h2>
   
    </div>
<div className='border border-muted p-2 rounded-md lg:w-1/2 my-2 flex items-center gap-2'>
    <Search className='text-muted-foreground'/>
<input type='text' placeholder='Search...' className='outline-none border-none  bg-transparent'  />
</div>
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
    
        {
            products.map((product)=>(
                <div className='group relative cursor-pointer' key={product.id}>
               
                    <Link href={'/product/'+product.slug} className='group relative cursor-pointer' >
                <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-88'>
                 <Image src={product.imageUrl} width={300} height={300} className='w-full h-full object-center object-cover lg:h-full lg:w-full' alt={product.slug} />
                </div>
                <div className='my-3 flex justify-between items-center '>
              
                    <h3 className=' font-semibold text-sm line-clamp-1'>
                        
                         {product.name}
                        
                    </h3>
                   
                
                <p className='font-bold line-clamp-1  '>{product.price-product.discount} DA</p>
                </div>
                </Link>
                <AddToBag  currency='DA' name={product.name} image={product.imageUrl} price={product.price} discount={product.discount} id={product.id} key={product.id}/>
               </div>
               
                
            ))
        }
   
    </div>
    </div>

   </div>
  )
}
