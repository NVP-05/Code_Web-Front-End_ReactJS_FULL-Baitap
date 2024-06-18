import React, {useState} from 'react'

export default function Bai2() {
    const [valueinput, setValue] = useState<string>("");


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);

    }


  return (
    <div>
      <b>Dữ liệu người dùng nhập: {valueinput}</b>
      <br />
      <input
      onChange={handleChange}
      type="text" placeholder='Nhập dữ liệu'/>

    </div>
  )
}
