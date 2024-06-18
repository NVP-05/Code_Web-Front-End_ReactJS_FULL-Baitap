import React,{ useState } from 'react'


export default function Bai3() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Nguyễn Phúc', address: 'Thanh Hóa' },
        { id: 2, name: 'Quốc Hai', address: 'Thanh Hóa' },
        { id: 3, name: 'Văn Minh', address: 'Thanh Hóa' },
      ]);
    
  return (
    <div>
        <ul>
            {
                users.map((item,index) =>{
                    return <li key={index}><b>Họ và tên: {item.name}</b></li>
                })
            }
        </ul>
    </div>
  )
}
