import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  field: fieldReducer,
  game: gameReducer
});
