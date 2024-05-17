'use client'
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/lib/sanity';
import { toast } from "sonner"
import { usePathname } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { CheckCheck, CheckCircle, CheckCircle2, CheckCircle2Icon, CheckIcon } from 'lucide-react';

interface Product{
    id:string;
    name:string;
    price:number;
    discount:number;
    image:any;
    currency:string

  }

export default function AddToBag({id,name,price,discount,image,currency}:Product) {
    
    const product:Product={
        id:id,
        name:name,
        price:price,
        discount:discount,
        image:urlFor(image).url(),
        currency:currency
    }
  const pathname=usePathname()

    const{addItem,cartDetails,incrementItem}=useShoppingCart();

    const handAddToBag=(name:string)=>{

      
        const items=Object.values(cartDetails ?? {})
       
        const foundItem = items.find(item => item.name === name);
        if(foundItem){
         incrementItem(foundItem.id)
       
        }else{
          addItem(product)
           
        }


         toast("Product has been added", {
          description: name,
          
          icon:<CheckIcon className='text-primary' />
        })
      
    }
  return (
    <Button size={'lg'} onClick={()=>handAddToBag(name)} className={pathname.startsWith('/product/')? '':'w-full '}>Add To Cart</Button>
  )
}
