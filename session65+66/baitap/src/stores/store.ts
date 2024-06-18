import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/reducerBai1";
import userReducer2 from "./reducers/reducerBai2";
import userReducer3 from "./reducers/reducerBai3";
import reducerCount from "./reducers/reducerCount";

const rootReducer = combineReducers({
    userReducer,
    userReducer2,
    userReducer3,
    reducerCount,
})

const store = createStore(rootReducer);
export default store;
