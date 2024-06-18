import React, { useEffect } from "react";
import axios from "axios";

export default function Bai5() {
  const createStudent = async () => {
    const newStudent = {
      student_name: "Phúc",
      email: "Phúc1@gmail.com",
      address: "Thanh Hóa",
      phone: "1234567",
      status: true,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const data = await response.json();
      console.log("Kết quả thêm mới sinh viên:", data);
    } catch (error) {
      console.error("Có lỗi xảy ra khi gọi API bằng fetch!", error);
    }
  };

  useEffect(() => {
    createStudent();
  }, []);
  return <div></div>;
}
