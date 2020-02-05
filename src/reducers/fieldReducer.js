import { START_NEW_GAME, MOVE_PIECE, JUMP_PIECE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case START_NEW_GAME:
    case MOVE_PIECE:
    case JUMP_PIECE:
      return action.payload.field;
    default:
      return state;
  }
};
