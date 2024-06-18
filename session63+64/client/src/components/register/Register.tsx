import { useEffect, useState } from "react";
import bcrypt from "bcryptjs-react";
import { User } from "./Service";
import { baseURL } from "../../api";
import { AxiosResponse } from "axios";

export default function Register() {
  const [user, setUser] = useState<User>({
    id: 0,
    userName: "",
    email: "",
    password: "",
    repassword: "",
    cart: [],
  });

  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [value, name] = e.target.value;
    let newUser = {
      ...user,
      id: Math.floor(Math.random() * 999999999),
      [name]: value,
    };
    baseURL.get(`users?email_like=${user.email}`).then((res: AxiosResponse) => {
      if (res.status === 404) {
        console.log("Không tìm thấy bản ghi.");
      }
      return;
    });
  };

  /*
      Tạo form cho ng dùng nhập
      Lấy thông tin người dùng nhập
      Khi gửi thông tin lên db.json phải kiểm tra email có tồn tại hay ko
      Nếu có rồi thì báo email đã được đăng kí
      Dùng câu truy vấn
      axios.get(`http://localhost:8080/users?email_like=${email}`)
      ==> 2 Kết quả trả về
      1. []: Chứng tỏ email chưa tồn tại trong users
          - Mã hóa mật khẩu rồi mới lưu
              + Dùng thư viện bcrypt
          - Lưu lên db.json
      2. [{}]: Chứng tỏ email đã tồn tại trong users
    */
  //   useEffect(() => {
  //     let pass: "12345";
  //     bcrypt.hash("B4c0/", 10, function (err, hash) {
  //       console.log(hash);
  //       //   let passB = "$2a$10$4/krRtAatm12goyZMwB4DOZ.AtRju3pPB/c665gxYpuWeOrK8X1l";
  //       bcrypt.compare(pass, hash, (err, res) => {
  //         console.log(res);
  //       });
  //     });
  //   }, []);

  return (
    <div className="flex justify-center">
      <form action="">
        <input
          onChange={handleChange}
          name="nameUser"
          className="w-56 border-[3px] border-pink-500"
          type="text"
          placeholder="Vui lòng nhập tên hiển thị..."
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="email"
          className="w-56 border-[3px] border-pink-500"
          type="text"
          placeholder="Vui lòng nhập email..."
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="password"
          className="w-56 border-[3px] border-pink-500"
          type="text"
          placeholder="Vui lòng nhập mật khẩu..."
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="repassword"
          className="w-56 border-[3px] border-pink-500"
          type="text"
          placeholder="Vui lòng nhập lại mật khẩu..."
        />
      </form>
    </div>
  );
}
