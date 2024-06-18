import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Bai4() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">Nguyễn Văn Phúc</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
