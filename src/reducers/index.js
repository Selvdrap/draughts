import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";
import gameReducer from "./gameReducer";
import possibleMovesReducer from "./possibleMovesReducer";

export default combineReducers({
  field: fieldReducer,
  game: gameReducer,
  possibleMoves: possibleMovesReducer
});
