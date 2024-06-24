import { createSlice } from "@reduxjs/toolkit";


const countState:number = 0;

const countReducer = createSlice({
    name: "count",
    initialState: countState,
    reducers: {
        increase: (state) => {
            return state+=1
        },
        decrease: (state) => {
            return state-=1
        },
        reset: (state) => {
            return state = 0
        }
    }
})

export const {increase, decrease, reset} = countReducer.actions;
export default countReducer.reducer;