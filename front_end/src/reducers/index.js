import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import queryReducer from "./queryReducer";

// authReducer = { new initialState }
// query = { productQuery : data}
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  query: queryReducer
});
