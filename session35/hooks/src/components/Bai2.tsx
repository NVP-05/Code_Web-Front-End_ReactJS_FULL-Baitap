import React, { useState } from 'react'
interface Product{
    id:number,
    name:string,
    price:string,
    quantity:number
}

export default function Bai2() {
    const [product,setProduct] = useState<Product>({
        id:1,
        name:"Soda",
        price:"1,5$",
        quantity:5,
    })
  return (
    <div>
        <b>Thông tin sản phẩm</b>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
    </div>
  )
}
