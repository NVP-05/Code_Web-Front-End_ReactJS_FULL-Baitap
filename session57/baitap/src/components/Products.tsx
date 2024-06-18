import React from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

interface ProductListProps {
  products: Product[];
}

export default function Products({ products }:ProductListProps) {
  return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.product_name}</h3>
              <img src={product.image} alt={product.product_name} width="100" />
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>
                Created At: {new Date(product.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
    </div>
  );
}