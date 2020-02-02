import { GET_MOVES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
