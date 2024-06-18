import React from "react";

export default function StatusJob() {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Tất cả
        </button>
        <button className="bg-white text-black py-2 px-4 border border-gray-300 rounded-lg">
          Hoàn thành
        </button>
        <button className="bg-white text-black py-2 px-4 border border-gray-300 rounded-lg">
          Đang thực hiện
        </button>
      </div>
    </div>
  );
}
