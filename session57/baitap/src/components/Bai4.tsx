import React, { useEffect } from "react";

export default function Bai4() {
  const removeProductById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Không có phản hồi.");
      } else {
        console.log("Xóa thành công:", await response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    removeProductById(1);
  }, []);

  return (
    <div>
      <h1>Product Deletion</h1>
    </div>
  );
}
