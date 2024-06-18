import React, { useEffect } from "react";
import axios from "axios";

export default function Bai4() {
  const removeById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Kết quả xóa sinh viên:", data);
    } catch (error) {
      console.error("Có lỗi xảy ra khi gọi API bằng fetch!", error);
    }
  };

  useEffect(() => {
    removeById(1);
    removeById(6);
  }, []);

  return <div></div>;
}
