import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface";
import axios from "axios";

const user: User[] = [];
// Hàm lấy tất cả user
export const getUser: any = createAsyncThunk("users/getAllUser", async () => {
  const response = await axios.get("http://localhost:8080/users");
  return response.data;
});

// Hàm thêm mới user
export const addUser: any = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post("http://localhost:8080/users", user);
  return response.data;
});

// Hàm xóa user
export const deleteUser: any = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    const response = await axios.delete(`http://localhost:8080/users/${id}`);
    return response.data;
  }
);

// Hàm edit user
export const editUser: any = createAsyncThunk(
  "users/editUser",
  async ({ id, user }: { id: string; user: User }) => {
    const response = await axios.put(`http://localhost:8080/users/${id}`, user);
    return response.data;
  }
);

const reducerUser = createSlice({
  name: "users",
  initialState: {
    user: user,
  },
  reducers: {
    // Khai báo các action
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state: any, action: any) => {
        // Trạng thái chờ lấy dữ liệu
      })
      .addCase(getUser.fulfilled, (state: any, action: any) => {
        // Trạng thái lấy dữ liệu thành công
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state: any, action: any) => {
        // Trạng thái lấy dữ liệu thất bại
      })
      .addCase(addUser.fulfilled, (state: any, action: any) => {
        state.user.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = state.user.filter((item) => item.id !== action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.user.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.user[index] = action.payload;
        }
      });
  },
});
// Xuất ra các action

// Xuất ra reducer
export default reducerUser.reducer;
