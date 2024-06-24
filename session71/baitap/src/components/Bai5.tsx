import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/reducers/Bai5";
import "./Bai5.css";

export default function () {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: any) => state.menu.isVisible);

  console.log(isVisible);

  return (
    <div className="App">
      {isVisible && (
        <div className="menu">
          <ul>
            <li>Bảng điều khiển</li>
            <li>Tài khoản</li>
            <li>Tài sản</li>
            <li>Thống kê</li>
            <li>Tài liệu</li>
            <li onClick={() => dispatch(toggleMenu())}>Thu gọn</li>
          </ul>
        </div>
      )}
      <ul>
        <li><LeftOutlined /></li>
      </ul>
    </div>
  );
}
