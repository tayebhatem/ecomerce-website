'use client'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
 
  } from "@/components/ui/sheet"
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from "./ui/button";

import { Minus, Plus,Delete } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai";
export default function ShoppingCartModel() {
    const {
        cartCount,
        shouldDisplayCart,
        handleCartClick,
        cartDetails,
        removeItem,
        totalPrice,
         incrementItem,
         decrementItem
        
      } = useShoppingCart();
     const items=Object.values(cartDetails ?? {})

      const handlickCheckout=async()=>{
        if (!totalPrice) return 
        const finalPrice=totalPrice+400
         const options = {
             method: 'POST',
             headers: {
               Authorization: 'Bearer test_sk_E2ft89POxw9vMgHC0R7jissDEGS5dn0u6uPdb0fW',
               'Content-Type': 'application/json'
             },
             body: `{"amount":${finalPrice},"currency":"dzd","payment_method":"edahabia","failure_url":"http://localhost:3000/failure","webhook_endpoint":"http://localhost:3000","description":"test","locale":"ar","collect_shipping_address":false,"success_url":"http://localhost:3000/success"}`
           };
           
    await fetch('https://pay.chargily.net/test/api/v2/checkouts', options)
             .then(response => response.json())
             .then(
                 response => {
                     if(response.checkout_url){
                         window.location.href = response.checkout_url;
                     }
                   
                 }
                 )
             .catch(err => console.error(err));
         
       
       }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
     
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping cart</SheetTitle>
        
        </SheetHeader>
        <div className="h-full flex flex-col justify-between  ">
          <div className='mt-8 flex-1 overflow-y-auto'>
           <ul className='my-6 mr-4 divide-y divide-gray-200'>
            {
                cartCount===0 ?<h1 className="py-6  text-muted-foreground">You have no items</h1>:
                <>
                {
                   items.map((entry)=>(
                        <li key={entry.id} className="flex py-6 ">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image src={entry.image as string} alt="product image" width={100} height={100}/>
                        </div>
                        <div className="ml-4 flex flex-1 flex-col ">
                        <div>
                            <div className="flex justify-between items-center text-base font-medium  ">
                               <h3 className="text-sm md:text-lg font-medium">{entry.name}</h3>
                               <p className="font-bold ml-4 text-sm md:text-lg">{entry.price-entry.discount} DA</p>
                            </div>
                            
                        </div>

                       <div className="flex flex-1 justify-between items-center ">
                       <div className="flex gap-3 items-center self-end">
                       <Button size={"sm"} onClick={()=>incrementItem(entry.id)} className="rounded-none">
                       <AiOutlinePlus className="sm:w-5 sm:h-5"/>
                       </Button>
                       <p className="font-semibold text-sm text-center md:text-lg ">
                            {entry.quantity} item
                        </p>
                        <Button size={"sm"} onClick={()=>decrementItem(entry.id)} className="rounded-none">
                        <AiOutlineMinus className="sm:w-5 sm:h-5" />
                        </Button>
                       </div>
                        <div className="flex text-sm md:text-lg self-end">
                        <button onClick={()=>removeItem(entry.id)} className="font-medium text-primary hover:text-primary/10">
                        <MdDelete className="w-6 h-6" />

                        </button>
                        </div>
                       </div>
                        </div>
                        </li>
                    ))
                }
                </>
            }
           </ul>
          </div>

         {
            totalPrice!==0 &&
            <div className="border-t border-muted  py-6 sm:px-6 ">
            <div className="flex justify-between  font-bold text-xl   ">
               <p>
                  Total
               </p>
               <p>{totalPrice} DA</p>
            </div>
            <p className="text-muted-foreground mt-0.5">
              Shipping is calculated at checkout.
            </p>
            <div className="mt-6">
            <Button className="w-full text-lg" size={"lg"} onClick={handlickCheckout}>Checkout</Button>
            </div>
            </div>
         }
          
        </div>
      
      </SheetContent>
    </Sheet>
  
  )
}
