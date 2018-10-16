import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import queryReducer from "./queryReducer";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";

// authReducer = { new initialState }
// query = { productQuery : data}
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  query: queryReducer,
  profile: profileReducer,
  product: productReducer
});
