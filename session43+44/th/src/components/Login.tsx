import React from "react";

export default function Login() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="object-cover">
        <img src="https://genk.mediacdn.vn/zoom/700_438/2018/10/19/photo1539926992972-15399269929721994052665.jpg" alt="" />
      </div>

      <div className="w-72 h-[439px] border-2 text-center">
        <h3 className="text-3xl mt-4">Login</h3>
        <br />
        <label className="mr-52" htmlFor="">
          E-Mail
        </label>
        <br />
        <input
          className="border-2 rounded-md w-64 h-8"
          placeholder="Nhập..."
          type="text"
        />
        <br />
        <br />
        <label className="mr-48" htmlFor="">
          Password
        </label>
        <br />
        <input
          className="border-2 rounded-md w-64 h-8"
          placeholder="Nhập..."
          type="text"
        />
        <br />
        <a className="text-xs -mr-40" href="#">
          <b>Forgot password ?</b>
        </a>
        <br />
        <br />
        <button className="bg-blue-600 rounded-md w-64 h-8 text-white">
          Login
        </button>
        <br />
        <div className="flex items-center justify-between">
          <hr className="w-[45%]" />
          <p>Or</p>
          <hr className="w-[45%]" />
        </div>
        <button className="bg-blue-600 rounded-md w-64 h-8 text-white">
          Register
        </button>
      </div>
    </div>
  );
}
