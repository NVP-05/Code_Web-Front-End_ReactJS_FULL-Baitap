import React, { useState } from 'react'

export default function Bai4() {
    const [city, setCity] = useState<string>("");

    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setCity(e.target.value)
    }
  return (
    <div>
      <b>Tỉnh / Thành phố: {city}</b>
      <br />
      <select 
      onChange={handleChange}
      name="" id=""> 
        <option value="">--- Chọn tỉnh / Thành phố ---</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Phú Thọ">Phú Thọ</option>
      </select>
    </div>
  )
}
