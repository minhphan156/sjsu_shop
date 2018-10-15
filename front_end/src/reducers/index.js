import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import queryReducer from "./queryReducer";
import profileReducer from "./profileReducer";
import categoryReducer from "./categoryReducer";

// authReducer = { new initialState }
// query = { productQuery : data}
console.log("6 - index reducer " + JSON.stringify(categoryReducer));
console.log("6 - index reducer " + JSON.stringify(queryReducer));
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  query: queryReducer,
  profile: profileReducer,
  category: categoryReducer
});
