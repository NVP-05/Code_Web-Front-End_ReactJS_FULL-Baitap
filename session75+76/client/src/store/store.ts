import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "./reducers/productReducer";
import reducerCart from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    product: reducerProduct,
    cart: reducerCart,
  },
});

export default store;
