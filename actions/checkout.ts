
'use server'
export const createCheckout=async(total:number)=>{
   let checkout=null
   const finalPrice=total+400
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHARGILY_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"amount":${finalPrice},"currency":"dzd","payment_method":"edahabia","failure_url":"${process.env.NEXT_PUBLIC_URL}/failure","webhook_endpoint":"${process.env.NEXT_PUBLIC_URL}","locale":"en","success_url":"${process.env.NEXT_PUBLIC_URL}/success"}`
      };
      
await fetch('https://pay.chargily.net/test/api/v2/checkouts', options)
        .then(response => response.json())
        .then(
            response => {
           
            checkout=response
            
            }
            )
        .catch(err => console.error(err));
    
 return checkout
  }