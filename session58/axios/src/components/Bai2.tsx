import React, { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Bai2() {
  const [students, setStudents] = useState<Student[]>([]);

  const getAllStudents = async () => {
    try {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);

      axios
        .get("http://localhost:3000/students")
        .then((response) => {
          console.log("Danh sách sinh viên:", response.data);
        })
        .catch((error) => {
          console.error("Có lỗi xảy ra khi gọi API bằng axios!", error);
        });
    } catch (error) {
      console.error("Có lỗi xảy ra khi gọi API bằng fetch!", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
    </div>
  );
}
