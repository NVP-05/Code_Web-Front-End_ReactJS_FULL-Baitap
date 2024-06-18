import React from 'react'

export default function Bai1() {
    const handleClick=()=>{
        console.log("Click");
    }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
