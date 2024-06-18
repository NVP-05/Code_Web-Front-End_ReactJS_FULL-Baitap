import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function Bai1() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.product_name}</h2>
            <img src={product.image} alt={product.product_name} />
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
