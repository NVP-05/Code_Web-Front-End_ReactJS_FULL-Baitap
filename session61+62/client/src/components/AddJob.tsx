import axios from "axios";
import React, { useEffect, useState } from "react";

interface Job {
  name: string;
  id: number;
  status: boolean;
}

let value = "";
export default function AddJob() {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    value = e.target.value;
  };

  const handleClick = () => {
    let newJob: Job = {
      id: Math.floor(Math.random() * 9999999999),
      name: inputValue,
      status: true,
    };
    (value = ""), setActive(!active);
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Nhập tên công việc"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2"
        >
          Thêm công việc
        </button>
      </div>
    </div>
  );
}
