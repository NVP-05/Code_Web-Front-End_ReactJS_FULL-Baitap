import React, { useEffect, useState } from 'react'

export default function Bai2() {
  const [count, setCount] = useState<number>(0);

  const handleClick=()=>{
    setCount(count + 1);
  }

  useEffect(()=>{
    document.title = `Click ${count} lần`;
  });

  return (
    <div>
        <button onClick={handleClick}>Click {count} lần</button>
    </div>
  )
}
