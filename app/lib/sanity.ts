

import { createClient } from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url';

export const client=createClient({
    projectId:"uu3o9nu0",
    dataset:"production",
    apiVersion:"2022-03-07",
    useCdn: true
})

const builder=createImageUrlBuilder(client)

export const urlFor=(source:any)=> {
    return builder.image(source)
}