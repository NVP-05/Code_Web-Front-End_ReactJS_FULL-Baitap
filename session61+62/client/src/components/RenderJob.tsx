import React from "react";

export default function RenderJob() {
  return (
    <div>
      <ul>
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="flex-grow">Quét nhà</span>
          <button className="text-yellow-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" checked />
          <span className="flex-grow line-through">Giặt quần áo</span>
          <button className="text-yellow-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="flex-grow">Nấu cơm</span>
          <button className="text-yellow-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
