import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/reducerBai1";
import userReducer2 from "./reducers/reducerBai2";
import userReducer3 from "./reducers/reducerBai3";
import reducerCount from "./reducers/reducerCount";
import reducerBai5 from "./reducers/reducerBai5";
import reducerBai6 from "./reducers/reducerBai6";

const rootReducer = combineReducers({
    userReducer,
    userReducer2,
    userReducer3,
    reducerCount,
    reducerBai5,
    reducerBai6,
})

const store = createStore(rootReducer);
export default store;
