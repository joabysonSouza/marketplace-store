export interface Products{
    id:string
    name:string
    description?:string
    price:string|number
    currency:string
    image:string
    thumbnail?:string[]
}

export interface DummyProducts{
    id:number
    title:string
    description:string
    price:number
    discountPercentage:number
    rating:number
    stock:number
    brand:string
    category: string
    thumbnail:string
    images:string[]
    

}