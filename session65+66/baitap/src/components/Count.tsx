import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../action";

export default function Count() {
  const stateCount: any = useSelector((state) => {
    return state;
  });
  console.log(stateCount);

  const disPatch = useDispatch();
  const increase = () => {
    disPatch(actionCount("INCREASE", 1));
  };

  const decrease = () => {
    disPatch(actionCount("DECREASE", 1));
  };

  return (
    <div>
      Count
      <p>Giá trị của count: {stateCount.reducerCount}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}
