import React from "react";

export default function DeleteJob() {
  return (
    <div>
      <div className="mt-4">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg mb-2">
          Xóa công việc hoàn thành
        </button>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg">
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  );
}
