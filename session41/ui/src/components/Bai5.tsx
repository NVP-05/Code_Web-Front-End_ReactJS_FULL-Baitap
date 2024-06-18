import React from "react";

export default function Bai5() {
  return (
    <div className="relative w-32 h-32 bg-blue-300">
      <p>Relative parent</p>
      <div className="absolute bottom-0 left-0 bg-red-400">
        <p>Absolute child</p>
      </div>
    </div>
  );
}
