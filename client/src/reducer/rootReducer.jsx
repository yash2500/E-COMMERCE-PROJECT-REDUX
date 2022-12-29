import { cartData } from "./reducer";
import { combineReducers } from "redux";
import { productData } from "./productReducer";
import { userData } from "./userReducer"

export default combineReducers({
  cartData,
  productData,
  userData
});
