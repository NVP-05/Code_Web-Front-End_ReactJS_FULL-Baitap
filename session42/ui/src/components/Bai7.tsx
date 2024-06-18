import React from "react";
import { Toast } from "react-bootstrap";

export default function Bai7() {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
      </Toast>
    </div>
  );
}
