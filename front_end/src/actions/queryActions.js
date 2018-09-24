import { SET_QUERY } from "./types";
import axios from "axios";
// 2-do post request at routes/product.js with newQuery object
// newQuery = {description : someString }
export const submitQuery = newQuery => dispatch => {
  axios
    .post("/api/product/search", newQuery)
    // 4-if success then res.data will be the product object we looking for
    .then(res => console.log("at action now :" + JSON.stringify(res.data)))
    .catch(err => console.log(err));
};
