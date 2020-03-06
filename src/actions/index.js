import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  START_NEW_GAME,
  SELECT_PIECE,
  MOVE_PIECE,
  JUMP_PIECE,
  USER_LOGIN
} from "./types";
import { createGame } from "../moves";

let board = null;

export const startNewGame = () => dispatch => {
  board = createGame();

  dispatch({ type: START_NEW_GAME, payload: board });
};

const selectPiece = (row, cell) => dispatch => {
  const selected = board.selectPiece(row, cell);
  if (selected) dispatch({ type: SELECT_PIECE, payload: selected });
};

const movePiece = (row, cell) => dispatch => {
  board = board.selectedPiece.move({ row, cell }, board);
  dispatch({ type: MOVE_PIECE, payload: board });
};

const jumpPiece = (row, cell) => dispatch => {
  board = board.selectedPiece.jump({ row, cell }, board);
  dispatch({ type: JUMP_PIECE, payload: board });
};

export const checkAction = target => (dispatch, getState) => {
  const gameState = getState().game;
  const { selectedPiece, mustJump, players, turn } = gameState;
  const activePlayer = players[turn];

  const child = target.firstChild || target;

  if (!target.dataset.row && !target.dataset.player && !child.dataset.player)
    return;
  if (!target.dataset.player && !selectedPiece && !child.dataset.player) return;

  if (child.dataset.player && child.dataset.player === activePlayer) {
    dispatch(selectPiece(+target.dataset.row, +target.dataset.cell));
    return;
  }

  if (target.dataset.player && target.dataset.player === activePlayer) {
    const parent = target.parentElement;
    dispatch(selectPiece(+parent.dataset.row, +parent.dataset.cell));
    return;
  }

  if (selectedPiece && target.dataset.row) {
    let allow = selectedPiece.moves.some(m => {
      return m.row === +target.dataset.row && m.cell === +target.dataset.cell;
    });

    if (allow && !mustJump) {
      dispatch(movePiece(+target.dataset.row, +target.dataset.cell));
      return;
    }

    allow = selectedPiece.jumps.some(m => {
      return (
        m.target.row === +target.dataset.row &&
        m.target.cell === +target.dataset.cell
      );
    });

    if (allow) {
      dispatch(jumpPiece(+target.dataset.row, +target.dataset.cell));
      return;
    }
  }
};

export const registerUser = user => async dispatch => {
  try {
    const response = await axios.post("http://localhost:5000/register", user);
    if (response.data && response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({ type: USER_LOGIN, payload: response.data.user });
      useHistory.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = user => async dispatch => {
  try {
    const response = await axios.post("http://localhost:5000/login", user);
    if (response.data && response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({ type: USER_LOGIN, payload: response.data.user });
      useHistory.push("/");
    } 
  } catch (err) {
    console.log(err);
  }
};
