import { SET_QUERY } from "./types";
import axios from "axios";
// 2-do post request at routes/product.js with newQuery object
// newQuery = {description : someString }
export const submitQuery = newQuery => dispatch => {
  console.log("2 - INSIDE queryAction.js " + JSON.stringify(newQuery));

  axios
    .get("/api/product/search/", { params: newQuery })
    ///api/product/search/?description=searchString
    // 4-if success then res.data will be the product object we looking for
    .then(res => {
      console.log(
        "4 - INSIDE response queryAction.js " + JSON.stringify(res.data)
      );

      dispatch({
        type: SET_QUERY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
