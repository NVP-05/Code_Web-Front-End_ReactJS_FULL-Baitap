import React from "react";
import { Alert } from "react-bootstrap";

export default function Bai5() {
  return (
    <div>
      <Alert variant="success">Thêm tài khoản thành công.</Alert>
      <Alert variant="danger">Thêm mới tài khoản thất bại.</Alert>
      <Alert variant="warning">Tên không được để trống.</Alert>
    </div>
  );
}
