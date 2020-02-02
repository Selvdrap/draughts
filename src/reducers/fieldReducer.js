import { MOVE_PIECE } from "../actions/types";

const initialState = [
  ["b", "-", "b", "-", "b", "-", "b", "-"],
  ["-", "b", "-", "b", "-", "b", "-", "b"],
  ["b", "-", "b", "-", "b", "-", "b", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "r", "-", "r", "-", "r", "-", "r"],
  ["r", "-", "r", "-", "r", "-", "r", "-"],
  ["-", "r", "-", "r", "-", "r", "-", "r"]
];

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_PIECE:
      const source = action.payload.source;
      const target = action.payload.target;

      return state.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          if (rowIndex === source.row && cellIndex === source.cell) {
            return "-";
          }

          if (rowIndex === target.row && cellIndex === target.cell) {
            return action.payload.player;
          }

          return cell;
        });
      });
    default:
      return state;
  }
};
