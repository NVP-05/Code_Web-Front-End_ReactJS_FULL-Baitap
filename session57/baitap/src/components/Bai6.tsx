import React, { useEffect } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function Bai6() {
  const updateProductById = async (id: number, product: Partial<Product>) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Không phản hồi");
      }
      const data = await response.json();
      console.log("Update sản phẩm thành công:", data);
      return data;
    } catch (error) {
      console.error("Update sản phẩm thất bại:", error);
    }
  };

  useEffect(() => {
    const updatedProduct: Partial<Product> = {
      product_name: "Updated iphone 7",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
      price: 120,
      quantity: 1,
    };

    updateProductById(1, updatedProduct);
  }, []);

  return (
    <div>
      <h1>Update Product</h1>
    </div>
  );
}
