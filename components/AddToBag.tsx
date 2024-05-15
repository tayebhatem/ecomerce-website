'use client'
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/lib/sanity';
import { toast, useToast } from './ui/use-toast';
import { usePathname } from 'next/navigation';

interface Product{
    id:string;
    name:string;
    price:number;
    discount:number;
    image:any;
    currency:string

  }

export default function AddToBag({id,name,price,discount,image,currency}:Product) {
    const { toast } = useToast()
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

        toast({
            description: "Your message has been sent.",
          });
        
        const items=Object.values(cartDetails ?? {})
       
        const foundItem = items.find(item => item.name === name);
        if(foundItem){
         incrementItem(foundItem.id)
       
        }else{
          addItem(product)
           
        }
      
    }
  return (
    <Button size={'lg'} onClick={()=>handAddToBag(name)} className={pathname.startsWith('/product/')? '':'w-full'}>Add To Cart</Button>
  )
}
