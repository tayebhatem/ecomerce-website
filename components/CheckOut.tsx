
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'




export default function CheckOut(total:number) {
      const [disabled,setDisabled]=useState(true)
    
      const handlickCheckout=async()=>{
        setDisabled(true)
       const finalPrice=total+400
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
                   setDisabled(false)
                }
                )
            .catch(err => console.error(err));
        
     
      }
  
  return (
    <Button className="w-full text-lg" size={"lg"} onClick={handlickCheckout} disabled={disabled} >Checkout</Button>
  )
}
