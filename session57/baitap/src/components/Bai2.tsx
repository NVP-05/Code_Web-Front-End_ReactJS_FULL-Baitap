import React, { useEffect, useState } from "react";
import Products from "./Products";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}
export default function Bai2() {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <Products products={products} />
    </div>
  );
}
