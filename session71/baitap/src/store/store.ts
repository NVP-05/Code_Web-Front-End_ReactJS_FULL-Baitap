import { configureStore } from "@reduxjs/toolkit";
import dung from "./reducers/Bai1";
import random from "./reducers/Bai2";
import themeRandom from "./reducers/Bai3";
import displayReducer from "./reducers/Bai4";
import menuReducer from "./reducers/Bai5";

export const store = configureStore({
    reducer: {
        count: dung,
        randomNumber: random,
        theme: themeRandom,
        display: displayReducer,
        menu: menuReducer,
    }
})

