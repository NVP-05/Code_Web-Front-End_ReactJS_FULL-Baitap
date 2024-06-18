import React from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

interface ProductDetailProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  if (!product) {
    return <div>Không tìm thấy bản ghi</div>;
  }

  return (
    <div>
      <h2>{product.product_name}</h2>
      <img src={product.image} alt={product.product_name} width="200" />
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Created At: {new Date(product.created_at).toLocaleDateString()}</p>
    </div>
  );
}
