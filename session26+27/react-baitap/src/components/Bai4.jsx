import React from 'react'

export default function Bai4() {
  
    const box1 = {
      width: '200px',
      height: '200px',
      backgroundColor: 'red',
      border: '1px solid black',
    }
    const box2 = {
      width: '200px',
      height: '200px',
      backgroundColor: 'blue',
      border: '1px solid black',
    }
    const box3 = {
      width: '200px',
      height: '200px',
      backgroundColor: 'green',
      border: '1px solid black',
    }
    const style = {
      display: 'flex',
      gap: '50px'
    }

  return (
      <div style={style}>
        <div style={box1}></div>
        <div style={box2}></div>
        <div style={box3}></div>
      </div>
  )
}
