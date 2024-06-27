import React from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <div className="flex">
      <ProductList></ProductList>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}
