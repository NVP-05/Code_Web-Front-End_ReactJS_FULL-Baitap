import { configureStore } from "@reduxjs/toolkit"
import reducerUser from "./reducers/userReducer"


const store = configureStore({
    reducer: {
        user: reducerUser
    }
})

export default store;