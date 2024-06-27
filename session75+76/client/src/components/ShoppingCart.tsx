import React from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cartItems: any = useSelector((state) => state);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">Shopping cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 mb-4 flex justify-between">
          <div className="flex">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:{" "}
                <input
                  type="number"
                  className="border w-16 p-1"
                  defaultValue={item.quantity}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="bg-blue-500 text-white px-4 py-2 mb-2">
              Update
            </button>
            <button className="text-red-500">Remove</button>
          </div>
        </div>
      ))}
      <div className="font-bold text-right">Subtotal: ${subtotal}</div>
      <div className="text-green-500 text-center mt-4">
        Update product successfully
      </div>
    </div>
  );
}
