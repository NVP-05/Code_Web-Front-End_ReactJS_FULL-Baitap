import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "../../interface";

const initialState: CartItem[] = [];

export const fetchCart: any = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get("http://localhost:8080/cart");
  return response.data;
});

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cartReducer.reducer;
