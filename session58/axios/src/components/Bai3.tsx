import React, { useEffect } from "react";
import axios from "axios";

export default function Bai3() {
  const getStudentById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Thông tin sinh viên:", data);
      } else {
        console.log("Không tìm thấy bản ghi");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi gọi API bằng fetch!", error);
    }
  };

  useEffect(() => {
    getStudentById(1);
    getStudentById(6);
  }, []);
  return <div></div>;
}
