import React, { useEffect } from "react";
import axios from "axios";

export default function Bai6() {
  const updateStudentById = async (id: number) => {
    const updatedStudent = {
      student_name: "Lương mới",
      email: "luongmoi@gmail.com",
      address: "Phú Thọ",
      phone: "1234567890",
      status: true,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      const data = await response.json();
      console.log("Kết quả cập nhật sinh viên:", data);
    } catch (error) {
      console.error("Có lỗi xảy ra khi gọi API bằng fetch!", error);
    }
  };

  useEffect(() => {
    updateStudentById(3);
  }, []);
  return <div></div>;
}
