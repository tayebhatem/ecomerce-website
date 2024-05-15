'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { handlickCheckout } from '@/actions/checkout'
import { usePathname } from 'next/navigation'
import { useShoppingCart } from 'use-shopping-cart'




export default function CheckOut({total}:{total:number | undefined}) {
     const {clearCart}=useShoppingCart()
      const pathname=usePathname()
      
      const handlecheckoutClick=async()=>{
        if(!total) return
      await handlickCheckout(total)
    
      
      }
  
  return (
    <Button className={pathname.startsWith('/product/')?" text-lg":"w-full text-lg"}  variant={pathname.startsWith('/product/')?'secondary':'default'} size={"lg"} onClick={handlecheckoutClick}  >Checkout</Button>
  )
}
