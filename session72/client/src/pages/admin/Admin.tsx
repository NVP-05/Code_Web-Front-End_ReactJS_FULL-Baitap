import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
} from "../../store/reducers/userReducer";
import { User } from "../../interface";

export default function Admin() {
  // Lấy dữ liệu về
  const getData: any = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(getData);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // Hàm thêm user
  const addNewUser = () => {
    let newUser = {
      name: "Phúc đẹp trai",
    };
    dispatch(addUser(newUser));
  };

  // Hàm đi xóa user
  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };
  const handleEditUser = (id: number) => {
    let newEditUser = {
      name: "Phúc đẹp trai 100%",
    };
    dispatch(editUser({ id, user: newEditUser }));
  };
  return (
    <div>
      Admin
      {getData.user.user.map((user: User) => {
        return (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
            <button onClick={() => handleEditUser(user.id)}>Sửa</button>
          </li>
        );
      })}
      <button onClick={addNewUser}>Add User</button>
    </div>
  );
}
