import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function Bai3() {
  const [product, setProduct] = useState<Product | null>(null);

  const getProductById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          console.log("Không tìm thấy bản ghi");
          return null;
        } else {
          throw new Error("Network response was not ok");
        }
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(4); // tìm bằng id.
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      <ProductDetail product={product} />
    </div>
  );
}
