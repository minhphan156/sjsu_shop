import { SET_QUERY } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  query: {}
};

// ...state = current state
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      console.log("at query reducer now " + JSON.stringify(action.payload));
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
}
