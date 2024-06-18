import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const [active, setActive] = useState<boolean>(true);
  let valuee: string = `${active}`;
  const value: any = useSelector((state) => {
    return state;
  });

  const disPatch = useDispatch();

  const handleClick = () => {
    disPatch({
      type: valuee,
    });
    setActive(!active);
  };

  return (
    <div>
      <b>{value.reducerBai6}</b>
      <br />
      <button onClick={handleClick}>Change state</button>
    </div>
  );
}
