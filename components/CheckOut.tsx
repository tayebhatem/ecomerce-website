'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { handlickCheckout } from '@/actions/checkout'


export default function CheckOut({total,isProduct}:{total:number | undefined;isProduct:boolean}) {
   
      
      const handlecheckoutClick=async()=>{
        if(!total) return
      await handlickCheckout(total)
    
      
      }
  
  return (
    <Button className={isProduct?" text-lg":"w-full text-lg"}  variant={isProduct?'secondary':'default'} size={"lg"} onClick={handlecheckoutClick}  >Checkout</Button>
  )
}
