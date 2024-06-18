import React from "react";
import { useSelector } from "react-redux";

export default function Bai1() {
  const user: any = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {user.userReducer.id}</p>
      <p>Họ và tên: {user.userReducer.userName}</p>
      <p>Giới tính: {user.userReducer.gender}</p>
      <p>Ngày sinh: {user.userReducer.dateBirth}</p>
      <p>Địa chỉ: {user.userReducer.address}</p>
    </div>
  );
}
