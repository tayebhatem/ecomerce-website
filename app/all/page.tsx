'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import AddToBag from '@/components/AddToBag';
import { getAllProducts, ProductType } from '@/actions/products';
import SearchProduct from '@/components/SearchProduct';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { FilterSheet } from '@/components/FilterSheet';
import { SheetTrigger } from '@/components/ui/sheet';
import CardLoader from '@/components/CardLoader';





export const dynamic = 'force-dynamic'

const categories=[
    {
        id:1,
        name:'all'
    },
    {
        id:2,
        name:'tshirts'
    },
    {
        id:3,
        name:'pants'
    },
    {
        id:4,
        name:'shoes'
    }
]

const prices=[
    {
        id:1,
        price:10000
    },
    {
        id:2,
        price:8000
    },
    {
        id:3,
        price:6000
    },
    {
        id:4,
        price:4000
    },
  
]
export default  function AllPage() {
    
    const [products, setProducts] = useState<ProductType[]>([])
    const [filterData, setFilterData] = useState<ProductType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filterConfig, setFilterConfig] = useState({
        category:'all',
        price:10000
    })
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
    
        // Apply search, category, and price filters simultaneously
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(value);
            const matchesCategory = filterConfig.category === 'all' || product.categoryName === filterConfig.category;
            const matchesPrice = filterConfig.price === 10000 || product.price < filterConfig.price;
    
            return matchesSearch && matchesCategory && matchesPrice;
        });
    
        setFilterData(filteredProducts);
    };
    
     useEffect(() => {
      const fetchProdcts=async()=>{
  
           try {
            const products=await getAllProducts()
            setProducts(products)
            setFilterData(products)
           } catch (error) {
            
           }finally{
            setIsLoading(false)
           }
      }  
      fetchProdcts()
     }, [])

     const handleFilterPrice = (price: number) => {
        setFilterConfig(prev => {
            const newConfig = { ...prev, price };
            applyFilters(newConfig); // Apply filters with updated config
            return newConfig;
        });
    };
    
    const handleFilterCategory = (category: string) => {
        setFilterConfig(prev => {
            const newConfig = { ...prev, category };
            applyFilters(newConfig); // Apply filters with updated config
            return newConfig;
        });
    };
    
    const applyFilters = (config: { category: string; price: number }) => {
        const filteredProducts = products.filter(product => {
            const matchesCategory = config.category === 'all' || product.categoryName === config.category;
            const matchesPrice = config.price === 10000 || product.price < config.price;
            return matchesCategory && matchesPrice;
        });
        setFilterData(filteredProducts);
    };
  return (
  <>
    <div className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8   '>


<div>
<div className='flex  justify-between items-center   '>
  <h2 className='text-2xl font-bold  tracking-tight  '>
   Our all products
  </h2>

   </div>
<div className='flex flex-row items-center gap-x-2'>
<div className='w-full'>
<SearchProduct  onChange={handleSearch}/>
</div>
<FilterSheet>
<div className='lg:block space-y-4'>
 <div className='space-y-3'>
 <h3 className='text-lg font-semibold'>Category</h3>
 <RadioGroup defaultValue={filterConfig.category} className='space-y-3'>
{categories.map((item)=>(
 <div className="flex items-center space-x-2" key={item.id}>
     <SheetTrigger asChild>
     <RadioGroupItem value={item.name} id={item.name} onClick={()=>handleFilterCategory(item.name)} />
     </SheetTrigger>

 <Label htmlFor={item.name} className='capitalize text-lg'>{item.name}</Label>
</div>
))}

</RadioGroup>
 </div>

 <div className='space-y-3'>
 <h3 className='text-lg font-semibold'>Price (DA)</h3>
 <RadioGroup defaultValue={filterConfig.price.toString()} className='space-y-3'>
{prices.map((item)=>(
 <div className="flex items-center space-x-2" key={item.id}>
     <SheetTrigger asChild>
     <RadioGroupItem value={item.price.toString()} id={item.price.toString()} onClick={()=>handleFilterPrice(item.price)} />
     </SheetTrigger>
 
 <Label htmlFor={item.price.toString()} className='text-lg'> {`${item.id>1 ? 'Less then '+item.price+' DA':'All'}`}  </Label>
</div>
))}

</RadioGroup>
 </div>

</div>
</FilterSheet>
</div>
   <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
   
       {isLoading?<>
        <CardLoader/>
      <CardLoader/>
      <CardLoader/>
      <CardLoader/>
      <CardLoader/>
      <CardLoader/>
       </>:
        filterData.length>0 ?   filterData.map((product)=>(
               <div className='group relative cursor-pointer' key={product.id}>
              
                   <Link href={'/product/'+product.slug} className='group relative cursor-pointer' >
               <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-88'>
                <Image src={product.imageUrl} width={300} height={300} className='w-full h-full object-center object-cover lg:h-full lg:w-full' alt={product.slug} />
               </div>
               <div className='my-3 flex justify-between items-center'>
              
                   <h3 className=' font-semibold text-lg '>
                       
                        {product.name}
                       
                   </h3>
                  
               
               <p className='font-bold  text-2xl  '>{product.price-product.discount} DA</p>
               </div>
               </Link>
               <AddToBag  currency='DA' name={product.name} image={product.imageUrl} price={product.price} discount={product.discount} id={product.id} key={product.id}/>
             </div>
              
               
           )):
           <div className='w-full col-span-3 '>
    <h1 className='text-xl font-semibold text-center'>
        No products found
    </h1>
    <p className='text-muted-foreground text-center'>All products will be displayed here</p>
</div>

       }
  
   </div>
</div>
   </div>
  
  </>
   
  )
}
