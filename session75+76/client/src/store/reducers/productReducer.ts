import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../interface";

const products: Product[] = [];

const getProducts: any = axios.get("http://localhost:8080/products");

const reducerProduct = createSlice({
  name: "users",
  initialState: {
    product: products,
  },
  reducers: {
    // Khai báo các action
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state: any, action: any) => {
      // Trạng thái lấy dữ liệu thành công
      state.user = action.payload;
    });
  },
});

export default reducerProduct.reducer;
