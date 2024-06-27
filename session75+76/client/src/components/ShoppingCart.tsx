import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/reducers/cartReducer";

export default function ShoppingCart() {
  const cartItems: any = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const subtotal = cartItems.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">Shopping cart</h2>
      {cartItems.map((item: any) => (
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
