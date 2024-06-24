import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplayMode } from "../store/reducers/Bai4";
import "./Bai4.css";

export default function Bai4() {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.display.mode);
  console.log(mode);

  const items = [1, 2, 3, 4];

  return (
    <div className={`App ${mode}`}>
      <button onClick={() => dispatch(toggleDisplayMode())}>
        {mode === "grid" ? "Grid mode" : "List mode"}
      </button>
      <div className={`container ${mode}`}>
        {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
