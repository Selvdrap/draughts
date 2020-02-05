import { START_NEW_GAME, SELECT_PIECE, MOVE_PIECE, JUMP_PIECE } from "./types";
import { createGame } from "../moves";

let board = null;

export const startNewGame = () => dispatch => {
  board = createGame();

  dispatch({ type: START_NEW_GAME, payload: board });
};

export const selectPiece = (row, cell) => dispatch => {
  const selected = board.selectPiece(row, cell);
  if (selected) dispatch({ type: SELECT_PIECE, payload: selected });
};

export const movePiece = (row, cell) => dispatch => {
  board = board.selectedPiece.move({ row, cell }, board);
  dispatch({ type: MOVE_PIECE, payload: board });
};

export const jumpPiece = (row, cell) => dispatch => {
  board = board.selectedPiece.jump({ row, cell }, board);
  dispatch({ type: JUMP_PIECE, payload: board });
};
