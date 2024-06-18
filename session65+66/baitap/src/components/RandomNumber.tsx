import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionNumber } from "../action";

export default function RandomNumber() {
  const numbers: any = useSelector((state) => {
    return state;
  });
  console.log(numbers);

  const disPatch = useDispatch();
  const handleClick = () => {
    let a: number = Math.floor(Math.random() * 999);
    disPatch(actionNumber("ADD", `${a},`));
  };
  return (
    <div>
      <b>
        [
        {numbers.reducerBai5.map((number: any) => {
          return number;
        })}
        ]
      </b>
      <br />
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
}
