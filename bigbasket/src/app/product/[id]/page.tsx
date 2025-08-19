import React, { use, useState } from 'react'


    interface Product{
       productId: number,
       productSku: string,
       productName: string,
       productPrice: number,
       productShortName: string,
       productDescription: string,
       createdDate: string,
       deliveryTimeSpan: string,
       categoryId: number,
       productImageUrl: string,
       categoryName: string
    }
export default function Page({ params }: { params: Promise<{ id: string }>}) {
    const {id}= use(params);
    const productId= Number(id)
    const [products, setProducts]= useState<Product[]>([])
    const [loading, setLoading]= useState(true)
  return (
    <div>P</div>
  )
}
