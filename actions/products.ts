'use server'
import { client } from '@/app/lib/sanity';
export interface ProductType{
    id:string;
    name:string;
    price:number;
    discount:number;
    slug:string;
    categoryName:string
    imageUrl:string;
  
  }

export const getProducts=async(category:string)=>{
    const query = `*[_type == "product" &&  category->name == "${category}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          discount,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;
      const data:ProductType[]=await client.fetch(query);
      
      return data;
}

export const getAllProducts=async()=>{
    const query = `*[_type == "product" ] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          discount,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }

`;
      const data:ProductType[]=await client.fetch(query);
      return data;
}
export const getHeroImages=async()=>{
    const data=await client.fetch(`*[_type == 'heroImage'][0]`);
    return data;
}