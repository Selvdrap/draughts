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
  slain: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
    case MOVE_PIECE:
      return { ...state, ...action.payload };
    case SELECT_PIECE:
      const slain = action.payload.jumps.map(j => j.slain);
      return { ...state, selectedPiece: action.payload, slain };
    case JUMP_PIECE:
      let newTargets = [];
      if (action.payload.selectedPiece && action.payload.mustJump) {
        newTargets = action.payload.selectedPiece.jumps.map(j => j.slain);
      }

      return { ...state, ...action.payload, slain: newTargets };
    default:
      return state;
  }
};
