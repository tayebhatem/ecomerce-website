import React from 'react'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
export default function FailurePage() {
  return (
    <div className='flex justify-center items-center h-full mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
         <Alert variant="destructive" >
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
       Your payment has been failed.
      </AlertDescription>
    </Alert>
    </div>
  )
}
