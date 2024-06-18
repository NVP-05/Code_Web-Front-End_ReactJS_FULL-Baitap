import React from "react";

export default function Bai9() {
  return (
    <div>
      <nav className="w-[300px] h-[auto] bg-slate-500">
        <div>
          <span className="material-symbols-outlined text-4xl p-3">star</span>
          <hr />
        </div>
        <div>
          <ul className="pl-2">
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">home</span>
                Dashboard
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">post_add</span>
                Post
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">movie</span>
                Media
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">description</span>
                Pages
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">chat</span>
                Comments
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">grid_view</span>
                Appearance
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">local_mall</span>
                Plugins
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">group</span>
                Users
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">settings</span>
                Settings
              </a>
            </li>
            <li className="pt-2">
              <a href="" className="  flex items-center text-white gap-6">
                <span className="material-symbols-outlined">build</span>
                Tools
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex justify-around gap-11">
          <div className="flex justify-center items-center">
            <span className="material-symbols-outlined">dark_mode</span>
            Darkmode
          </div>
          <span className="material-symbols-outlined text-3xl">toggle_off</span>
        </div>
        <hr />
        <div className="flex justify-center items-center h-12">
          <div className="w-[270px] h-8 bg-red-500 rounded-lg flex items-center ">
            <span className="material-symbols-outlined ml-6">logout</span>
            Logout
          </div>
        </div>
      </nav>
    </div>
  );
}
