import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    product: reducerProduct,
  },
});

export default store;
