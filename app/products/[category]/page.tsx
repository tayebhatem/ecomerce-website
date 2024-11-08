'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AddToBag from '@/components/AddToBag';
import { getProducts, ProductType } from '@/actions/products';
import SearchProduct from '@/components/SearchProduct';
import CardLoader from '@/components/CardLoader';


export const dynamic = 'force-dynamic'



export default  function CategoryPage({params}:{params:{category:string}}) {
  const {category}=params
  const [products, setProducts] = useState<ProductType[]>([])
  const [filterData, setFilterData] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value
    if (value) {
      const data = products.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      console.log(data)
      setFilterData(data);
    } else {
      setFilterData(products);
    }
  }
   useEffect(() => {
    const fetchProdcts=async()=>{

         try {
          const products=await getProducts(category)
          setProducts(products)
          setFilterData(products)
         } catch (error) {
          
         }finally{
          setIsLoading(false)
         }
    }  
    fetchProdcts()
   }, [category])
   
  return (
 
    <div className='mx-auto max-w-2xl px-4   lg:max-w-7xl lg:px-8'>

    <div className='flex  justify-between items-center'>
   <h2 className='text-2xl font-bold  tracking-tight '>
    Our products for {params.category}
   </h2>

    </div>
  <SearchProduct onChange={handleSearch}/>
    <div className='mt-6 grid  gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3  xl:gap-x-8'>
    
        {isLoading?<>
        <CardLoader/>
      <CardLoader/>
      <CardLoader/>
     
       </>:
           filterData.length>0 ? filterData.map((product)=>(
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

   
  )
}
