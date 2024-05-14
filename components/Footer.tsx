
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

import { FaFacebookSquare,FaInstagram,FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='mx-auto max-w-2xl px-4 mt-10 sm:max-w-7xl flex flex-col items-center gap-6 '>
          <Separator />
        <div className='flex items-center gap-8 text-primary '>
            <Link href={'/'} className='hover:underline'>Home</Link>
            <Link href={'/tshirts'} className='hover:underline'>Tshirt</Link>
            <Link href={'/pants'} className='hover:underline'>Pants</Link>
            <Link href={'/shoes'} className='hover:underline'>Shoes</Link>
        </div>
        <div className='flex items-center gap-8 py-6  '>
       
            <Link href={'/'} className='hover:opacity-30' ><FaFacebookSquare size={28}/> </Link>
            <Link href={'/'} className='hover:opacity-30'><FaInstagram size={28}/></Link>
            <Link href={'/'} className='hover:opacity-30'><FaTiktok size={28}/></Link>
        </div>
        <p className='text-center text-muted-foreground '> © 2024 DzComerce All rights reserverd</p>
    </div>
  )
}
