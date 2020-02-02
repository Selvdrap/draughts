import { SET_ACTIVE_PLAYER, SELECT_PIECE } from "../actions/types";

const initialState = {
  activePlayer: "+",
  activePiece: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PLAYER:
      return { ...state, activePlayer: action.payload };
    case SELECT_PIECE:
      return { ...state, activePiece: action.payload };
    default:
      return state;
  }
};
