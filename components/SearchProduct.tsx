import { Search } from 'lucide-react'
import React from 'react'

const SearchProduct = ({onChange}:{onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <div className='border border-muted p-2 rounded-md  my-2 flex items-center gap-2'>
    <Search className='text-secondary-foreground'  />
<input type='text' placeholder='Search...' className='outline-none border-none w-full' onChange={onChange} />
</div>
  )
}

export default SearchProduct
