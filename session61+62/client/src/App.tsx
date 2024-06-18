import React from "react";
import AddJob from "./components/AddJob";
import DeleteJob from "./components/DeleteJob";
import RenderJob from "./components/RenderJob";
import StatusJob from "./components/StatusJob";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Quản lý công việc
        </h2>
        <AddJob></AddJob>
        <StatusJob></StatusJob>
        <RenderJob></RenderJob>
        <DeleteJob></DeleteJob>
      </div>
    </div>
  );
}
