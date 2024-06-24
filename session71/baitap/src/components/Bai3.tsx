import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/reducers/Bai3";
import "./Bai3.css";

export default function Bai3() {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <div className={`App ${theme}`}>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
