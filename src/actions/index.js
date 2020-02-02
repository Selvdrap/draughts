import {
  SET_ACTIVE_PLAYER,
  SELECT_PIECE,
  MOVE_PIECE,
  GET_MOVES
} from "./types";
import { calculatePossibleMoves } from "../moves";

export const getMoves = field => {
  return {
    type: GET_MOVES,
    payload: calculatePossibleMoves(field)
  };
};

export const setActivePlayer = player => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_PLAYER,
    payload: player
  });

  dispatch(getMoves(getState().field));
};

export const selectPiece = (piece, row, cell) => {
  return {
    type: SELECT_PIECE,
    payload: piece ? { piece, row, cell } : null
  };
};

export const movePiece = (source, target, player) => dispatch => {
  dispatch({
    type: MOVE_PIECE,
    payload: { player, source, target }
  });

  dispatch(setActivePlayer(player === "r" ? "b" : "r"));
  dispatch(selectPiece(null));
};
