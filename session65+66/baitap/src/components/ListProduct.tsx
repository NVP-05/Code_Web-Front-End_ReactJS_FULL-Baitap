import React from "react";
import { useSelector } from "react-redux";

export default function ListProduct() {
  const listProduct: any = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.userReducer3.map((products: any) => {
            return (
              <tr>
                <td>{products.id}</td>
                <td>{products.productName}</td>
                <td>{products.price}</td>
                <td>{products.quantity}</td>
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
