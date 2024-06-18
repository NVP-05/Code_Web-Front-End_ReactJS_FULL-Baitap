import React, { useEffect, useState } from 'react'

export default function Bai1() {
    const [value, setValue] = useState<string>("");

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    
    useEffect(()=>{
        document.title = value;
    })
  return (
    <div>
      <input
      onChange={handleChange}
      type="text" name="" id="" placeholder='Nhập tiêu đề'/>
    </div>
  )
}
