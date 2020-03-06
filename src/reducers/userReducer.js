import { USER_LOGIN } from "../actions/types";

const initialState = {
  username: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
