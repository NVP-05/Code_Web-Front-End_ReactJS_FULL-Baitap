import React from "react";
import { NavLink } from "react-router-dom";
import "./homee.css"

export default function Homee() {
  return (
    <div>
      <NavLink to="/homepage2">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </div>
  );
}
