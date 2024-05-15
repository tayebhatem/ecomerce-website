'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { HammerIcon, ShoppingBag } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { useShoppingCart } from 'use-shopping-cart'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Links=[
  {
    name:'Home',
    href:'/'
  },
  {
    name:'Tshirt',
    href:'/products/tshirts'
  },
  {
    name:'Pants',
    href:'/products/pants'
  },
  {
    name:'Shoes',
    href:'/products/shoes'
  }
]
export default function NavBar() {
  const currentPath=usePathname()
  const { handleCartClick,cartCount } = useShoppingCart();
 
  return (
   <header className=' border-b fixed z-30 top-0 w-full bg-card'>
    <div className='flex justify-between py-3 sm:py-0 items-center mx-auto max-w-2xl px-4 sm:max-w-7xl'>
     <Link href={"/"}>
     <h1 className='text-2xl md:text-4xl font-bold'>Dz<span className='text-primary'>Comerce</span></h1>
     </Link>
     <nav className='hidden gap-12 md:flex 2xl:ml-16'>
     {
    Links.map((link,index)=>(
     <Link href={link.href} key={index} className={currentPath===link.href?'text-primary text-lg font-semibold':'text-lg font-semibold  transition duration-100 hover:text-primary'}>{link.name}</Link>
    ))
     }
     </nav>
     <div className='flex items-center gap-3'>
     
    
     <Button onClick={()=>handleCartClick()} variant={'outline'} className='relative flex flex-col border-none gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none '>
        <ShoppingBag/>
        {cartCount!==0 && <span className='absolute bg-primary text-white  rounded-full w-5 h-5 font-medium left-1 top-2 sm:left-5 sm:top-6 md:top-8 md:left-7'>{cartCount}</span>}
      </Button>
       
     
    
  
     
      <ModeToggle/>

      
      <Sheet >
    <SheetTrigger>
    <HamburgerMenuIcon className='w-5 h-5  block cursor-pointer md:hidden'/>
    </SheetTrigger>
  <SheetContent side={'left'}>
    <SheetHeader>
    <Link href={"/"}>
     <h1 className='text-2xl md:text-4xl font-bold'>Dz<span className='text-primary'>Comerce</span></h1>
     </Link>
    </SheetHeader>
    <div className='flex flex-col gap-8 my-6 justify-center items-center'>
    {
    Links.map((link,index)=>(
     <Link href={link.href} key={index}  className={currentPath===link.href?'text-primary text-lg font-semibold':'text-lg font-semibold  transition duration-100 hover:text-primary'}>{link.name}</Link>
    ))
     }
</div>
  </SheetContent>
</Sheet>
     </div>
    
    </div>
  

   </header>
  )
}
