import { createStore, combineReducers } from "redux";
import bookreducer from "./reducers/bookReducer";

const rootReducers = combineReducers({
    bookreducer,
})

const store = createStore(rootReducers);

export default store;