import React from "react";

interface Book {
  id: number;
  title: string;
  borrower: string;
  borrowDate: string;
  returnDate: string;
  status: "Đã trả" | "Chưa trả";
}

interface BookTableProps {
  books: Book[];
}

export default function RenderBooks() {
  const books = [
    {
      id: 1,
      title: "Harry Potter và Hòn Đá Phù Thủy",
      borrower: "Nguyễn Văn A",
      borrowDate: "10/04/2024",
      returnDate: "17/04/2024",
      status: "Đã trả",
    },
    {
      id: 2,
      title: "Đắc Nhân Tâm",
      borrower: "Trần Thị B",
      borrowDate: "05/04/2024",
      returnDate: "12/04/2024",
      status: "Chưa trả",
    },
    {
      id: 3,
      title: "1984",
      borrower: "Lê Văn C",
      borrowDate: "02/04/2024",
      returnDate: "09/04/2024",
      status: "Đã trả",
    },
    {
      id: 4,
      title: "Tiền Không Mua Được Hạnh Phúc",
      borrower: "Phạm Thị D",
      borrowDate: "20/03/2024",
      returnDate: "27/03/2024",
      status: "Đã trả",
    },
    {
      id: 5,
      title: "Người Mẹ Tốt Hơn Là Người Thầy Tốt",
      borrower: "Võ Văn E",
      borrowDate: "15/03/2024",
      returnDate: "22/03/2024",
      status: "Chưa trả",
    },
    {
      id: 6,
      title: "Nghìn Lẻ Một Đêm",
      borrower: "Trần Văn F",
      borrowDate: "10/03/2024",
      returnDate: "17/03/2024",
      status: "Chưa trả",
    },
    {
      id: 7,
      title: "Bắt Trẻ Đồng Xanh",
      borrower: "Phan Thị G",
      borrowDate: "05/03/2024",
      returnDate: "12/03/2024",
      status: "Đã trả",
    },
    {
      id: 8,
      title: "Cô Bé Mất Tích",
      borrower: "Lý Thị H",
      borrowDate: "01/03/2024",
      returnDate: "08/03/2024",
      status: "Đã trả",
    },
    {
      id: 9,
      title: "Bí Mật Của Một Trí Nhớ Siêu Phàm",
      borrower: "Trần Thị K",
      borrowDate: "25/02/2024",
      returnDate: "03/03/2024",
      status: "Chưa trả",
    },
    {
      id: 10,
      title: "Chuyến Tàu Định Mệnh",
      borrower: "Lê Văn L",
      borrowDate: "15/02/2024",
      returnDate: "22/02/2024",
      status: "Đã trả",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quản lý mượn trả sách</h2>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Thêm thông tin
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">STT</th>
            <th className="py-2 px-4 border-b">Tên sách</th>
            <th className="py-2 px-4 border-b">Sinh viên mượn</th>
            <th className="py-2 px-4 border-b">Ngày mượn</th>
            <th className="py-2 px-4 border-b">Ngày trả</th>
            <th className="py-2 px-4 border-b">Trạng thái</th>
            <th className="py-2 px-4 border-b">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b">{book.title}</td>
              <td className="py-2 px-4 border-b">{book.borrower}</td>
              <td className="py-2 px-4 border-b">{book.borrowDate}</td>
              <td className="py-2 px-4 border-b">{book.returnDate}</td>
              <td className="py-2 px-4 border-b text-center">
                <span
                  className={`py-1 px-2 rounded ${
                    book.status === "Đã trả"
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {book.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-yellow-300 text-white py-1 px-2 rounded mr-2">
                  Sửa
                </button>
                <button className="bg-red-300 text-white py-1 px-2 rounded">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
