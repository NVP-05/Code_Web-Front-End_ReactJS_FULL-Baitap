import React, { useState } from 'react'

export default function Bai7() {
    const [count, setCount] = useState<number>(0);
    const [countNow, setCountNow] = useState<number>(0);
    const [countPrevious, setCountPrevious] = useState<any>();

    const handleClick=()=>{
        setCount(count + 1);
        setCountNow(count+1)
        setCountPrevious(countNow)
    }
  return (
    <div>
        <p>Giá trị trước: {countPrevious}</p>
        <p>Giá trị hiện tại: {countNow}</p>
        <button onClick={handleClick}>Tăng</button>
    </div>
  )
}
