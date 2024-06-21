import React, { useEffect, useState } from "react";
import { Book } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { actionBook } from "./action";

export default function App() {
  const [date, setDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [newMinDate, setNewMinDate] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    let newDate = new Date().toISOString().split("T")[0];
    setMinDate(newDate);
  }, []);

  // Dùng useSelector để lấy các cuốn sách ra
  const stateBook = useSelector((state: any) => {
    return state.bookreducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dateValue = e.target.value;
    setNewMinDate(dateValue);
  };

  // Hàm chọn select
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let valueSelect = e.target.value;
    console.log(valueSelect);

    dispatch(actionBook("FILTER", valueSelect));
  };

  return (
    <div>
      App
      <br />
      <p>
        Ngày mượn:
        <input min={minDate} onChange={handleChange} type="date" />
      </p>
      <br />
      <p>
        Ngày trả:
        <input min={newMinDate} type="date" />
      </p>
      <select onChange={handleChangeSelect} name="" id="">
        <option value="">Lọc theo</option>
        <option value="true">Đã trả</option>
        <option value="false">Chưa trả</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {stateBook.map((item: Book, index: number) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  {item.status ? (
                    <button>Đã trả</button>
                  ) : (
                    <button>Chưa trả</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
