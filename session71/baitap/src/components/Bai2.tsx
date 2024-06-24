import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomNumbers } from "../store/reducers/Bai2";

export default function Bai2() {
  const dispatch = useDispatch();
  const numbers = useSelector((state: any) => state.randomNumber);

  return (
    <div className="App">
      <h2>List number: [{numbers.join(",")}]</h2>
      <button onClick={() => dispatch(generateRandomNumbers())}>
        Random number
      </button>
    </div>
  );
}
