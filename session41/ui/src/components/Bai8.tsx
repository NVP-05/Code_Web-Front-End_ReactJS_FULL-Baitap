import React from "react";

export default function Bai8() {
  /*
        Căn trái: text-left, justify-start, hoặc items-start.
        Căn phải: text-right, justify-end, hoặc items-end.
        Căn giữa: text-center, justify-center, hoặc items-center.
        
    */
  return (
    <div className="flex gap-10 ">
      <div className="bg-blue-400 rounded-lg w-16 h-16 flex items-center justify-center ">
        1
      </div>
      <div className="bg-blue-400 rounded-lg w-16 h-16 flex items-center justify-center">
        2
      </div>
      <div className="bg-blue-400 rounded-lg w-16 h-16 flex items-center justify-center">
        3
      </div>
    </div>
  );
}
