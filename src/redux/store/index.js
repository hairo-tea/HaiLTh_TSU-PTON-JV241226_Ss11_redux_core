import rootReducer from "../reducers/Index";
import { createStore } from "redux"

const store = createStore(rootReducer)
export default store;