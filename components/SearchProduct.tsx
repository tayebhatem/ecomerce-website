'use client'
import React, { ChangeEvent } from 'react';
import { Search } from 'lucide-react';
interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

 const SearchProduct: React.FC<SearchProps> = ({ value, onChange }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className='border border-muted p-2 rounded-md lg:w-1/2 my-2 flex items-center gap-2'>
    <Search className='text-secondary-foreground'  />
<input type='text' placeholder='Search...' className='outline-none border-none' onChange={handleChange} value={value}/>
</div>
  );
};

export default SearchProduct;
