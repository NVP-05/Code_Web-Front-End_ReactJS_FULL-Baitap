import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../store/reducers/Bai1";

export default function Bai1() {
  const count: any = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      <b>Count: {count.count}</b>
      <br />
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
