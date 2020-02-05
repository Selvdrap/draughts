import {
  START_NEW_GAME,
  SELECT_PIECE,
  MOVE_PIECE,
  JUMP_PIECE
} from "../actions/types";

const initialState = {
  players: {},
  count: {},
  turn: "",
  mustJump: false,
  selectedPiece: null,
  slain: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
    case MOVE_PIECE:
      return { ...state, ...action.payload };
    case SELECT_PIECE:
      const slain = action.payload.jumps[0]
        ? action.payload.jumps[0].slain
        : null;
      return { ...state, selectedPiece: action.payload, slain };
    case JUMP_PIECE:
      let newTarget = null;
      if (action.payload.selectedPiece && action.payload.mustJump) {
        newTarget = action.payload.selectedPiece.jumps[0].slain;
      }

      return { ...state, ...action.payload, slain: newTarget };
    default:
      return state;
  }
};
