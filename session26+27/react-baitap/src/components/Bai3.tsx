import React from 'react'

export default function Bai3() {
  
    type Obj = {
        name:string,
        sex:string,
        date:string,
        email:string,
        address:string,
    }
    let newPeople:Obj={
        name:"Nguyễn Văn Phúc",
        date:"20/02/2005",
        sex: "Nam",
        email:"mkPhuc123456789@gmail.com",
        address:"Hà Nội",
    }
    return (
    <div>
      <>
      <h2>Thông tin cá nhân.</h2>
      <ul>
        <li>Họ và tên: <b>{newPeople.name}</b></li>
        <li>Giới tính: <b>{newPeople.sex}</b></li>
        <li>Ngày sinh: <b>{newPeople.date}</b></li>
        <li>Email: <b>{newPeople.email}</b></li>
        <li>Địa chỉ: <b>{newPeople.address}</b></li>
      </ul>
      </>
    </div>
  )
}
