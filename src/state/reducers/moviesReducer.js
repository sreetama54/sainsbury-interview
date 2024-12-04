
import { SORT_DEFAULT } from "../../constants";

import { TOGGLE_SORT } from "../actions/constants";

const initialState = {
  movies: [],
  sort: SORT_DEFAULT,
}

export default function (state = initialState, action) {
  switch (action.type) {

    case TOGGLE_SORT:
      return {...state, sort: action.payload};
  
    default:
      return state;
  }
};