import React, { useEffect } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function Bai5() {
  const createProduct = async (product: Product) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Product created successfully:", data);
      return data;
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  useEffect(() => {
    const newProduct: Product = {
      id: 6,
      product_name: "iphone 13",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
      price: 200,
      quantity: 20,
      created_at: new Date().toISOString(),
    };

    createProduct(newProduct);
  }, []);

  return (
    <div>
      <h1>Create Product</h1>
    </div>
  );
}
