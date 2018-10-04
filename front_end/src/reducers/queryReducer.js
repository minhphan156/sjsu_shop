import { SET_QUERY } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  productQuery: null // initial product query will be empty
};

// ...state = current state
export default function(state = initialState, action) {
  console.log(
    "inside query reducers+++++++++" + JSON.stringify(action.payload)
  );
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        productQuery: action.payload
      };
    default:
      return state;
  }
}
