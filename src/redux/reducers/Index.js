import { combineReducers } from "redux";
import cartReducer from "./Cart";
import productReducer from "./Product";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});
export default rootReducer;