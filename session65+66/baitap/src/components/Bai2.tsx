import React from "react";
import { useSelector } from "react-redux";

export default function Bai2() {
  const user: any = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {user.userReducer2.map((users: any) => {
            return (
              <tr>
                <td>{users.id}</td>
                <td>{users.userName}</td>
                <td>{users.gender}</td>
                <td>{users.dateBirth}</td>
                <td>{users.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
