import React from 'react'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FailurePage() {
  return (
  
         

          <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
      
        <div className="text-center">
       <div className='flex justify-center items-center gap-3'>
       <ExclamationTriangleIcon className="h-8 w-8" />
          <h3 className="md:text-2xl text-base  font-semibold text-center">
          Your payment has been failed.
          </h3>
       </div>

          <p className="text-muted-foreground my-2">
           Try again later please
          </p>
         

          <Button asChild className="mt-5">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>


  )
}
