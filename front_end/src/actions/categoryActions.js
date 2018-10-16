import { GET_CATEGORY } from "./types";
import axios from "axios";
// 2-do post request at routes/product.js with newQuery object
export const submitCategory = newCategory => dispatch => {
  console.log("2 - INSIDE categoryAction.js " + newCategory.category);
  axios
    .get("/api/product/category/", { params: newCategory })
    ///api/product/search/?description=searchString
    // 4-if success then res.data will be the product object we looking for
    .then(res => {
      console.log(
        "4 - INSIDE response categoryAction.js " + JSON.stringify(res.data)
      );
      dispatch({
        type: GET_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
