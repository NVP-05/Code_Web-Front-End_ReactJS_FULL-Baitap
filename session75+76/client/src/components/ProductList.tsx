import React from "react";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products: any = useSelector((state) => state);
  console.log(products);

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">List Product</h2>
      {products.map((product: any) => (
        <div key={product.id} className="border p-4 mb-4 flex">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-16 h-16 mr-4"
          />
          <div className="flex-grow">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="flex items-center">
              <input
                type="number"
                className="border w-16 p-1 mr-2"
                defaultValue={2}
              />
              <button className="bg-blue-500 text-white px-4 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
