import React, { useState } from 'react'

export default function SelectOption() {
    const [select,setSelect] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value)
    }
    console.log("Giá trị đc chọn",select);
    
  return (
    <div>SelectOption
        <select name="" id="" onChange={handleChange}>
            <option value="Nam">Nam</option>
            <option selected value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
        </select>
    </div>
  )
}
