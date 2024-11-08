'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { createCheckout } from '@/actions/checkout'
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';


export default function CheckOut({total,isProduct}:{total:number | undefined;isProduct:boolean}) {
   const {clearCart}=useShoppingCart()
      const router=useRouter()
      const [isLoading, setIsLoading] = useState(false)
      const handlecheckoutClick=async()=>{
        setIsLoading(true)
    try {
      if(!total) return
      const response:any= await  createCheckout(total)
    
      router.push(response.checkout_url)
       if(response){
        
         clearCart()
       }
    } catch (error) {
      
    }finally{
      setIsLoading(false)
    }
      }
  
  return (
    <Button className={isProduct?" text-lg":"w-full text-lg"}  variant={isProduct?'secondary':'default'} size={"lg"} onClick={handlecheckoutClick}  >
      {isLoading?
     
<div
  className="w-8 h-8 border-4 border-t-white border-gray-300 rounded-full animate-spin"
></div>

      :'Checkout'}
    </Button>
  )
}
