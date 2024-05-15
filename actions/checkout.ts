export const handlickCheckout=async(total:number)=>{
   
   const finalPrice=total+400
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHARGILY_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"amount":${finalPrice},"currency":"dzd","payment_method":"edahabia","failure_url":"https://dz-comerce.vercel.app/failure","webhook_endpoint":"https://dz-comerce.vercel.app","locale":"ar","collect_shipping_address":false,"success_url":"https://dz-comerce.vercel.app/success"}`
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