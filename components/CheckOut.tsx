'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { handlickCheckout } from '@/actions/checkout'
import { usePathname } from 'next/navigation'




export default function CheckOut({total}:{total:number}) {
      const [disabled,setDisabled]=useState(true)
      const pathname=usePathname()
      
  
  return (
    <Button className={pathname.startsWith('/product/')?" text-lg":"w-full text-lg"}  variant={pathname.startsWith('/product/')?'secondary':'default'} size={"lg"} onClick={()=>handlickCheckout(total)}  >Checkout</Button>
  )
}
