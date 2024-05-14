export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Product Name'

        },
        {
            name:'images',
            type:'array',
            title:'Product',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'name'
            }

        },
        {
            name:'price',
            type:'number',
            title:'Price'

        },
        {
            name:'discount',
            type:'number',
            title:'Discount'

        },
        {
            name:'category',
            title:'Prodcut Category',
            type:'reference',
            to:[
                {
                    type:'category'
                }
            ]
        }
    ]
}