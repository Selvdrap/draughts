import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

export default combineReducers({
  field: fieldReducer,
  game: gameReducer,
  user: userReducer
});
