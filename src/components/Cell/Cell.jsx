import React from "react";
import { connect } from "react-redux";
import { CellWrapper } from "./styles";
import Piece from "../Piece";

const Cell = React.memo(props => {
  const {
    piece,
    row,
    cell,
    availableForMove,
    isSlain,
    isKing,
    isSelected
  } = props;
  const order = (row + cell) % 2 ? "odd" : "even";

  return (
    <CellWrapper
      data-row={row}
      data-cell={cell}
      order={order}
      move={availableForMove}
      remove={isSlain}
    >
      {piece ? <Piece piece={piece} active={isSelected} king={isKing} /> : null}
    </CellWrapper>
  );
});

const mapStateToProps = (state, ownProps) => {
  let availableForMove = false;
  const { selectedPiece, slain } = state.game;
  const isSelected = selectedPiece
    ? selectedPiece.row === ownProps.row && selectedPiece.cell === ownProps.cell
    : false;
  const isSlain = slain
    ? slain.row === ownProps.row && slain.cell === ownProps.cell
    : false;
  const isKing = state.game.pieces.find(
    p => p.row === ownProps.row && p.cell === ownProps.cell && p.king
  )
    ? true
    : false;

  if (selectedPiece) {
    if (selectedPiece.jumps.length) {
      availableForMove = selectedPiece.jumps.some(({ target }) => {
        return target.row === ownProps.row && target.cell === ownProps.cell;
      });
    } else if (selectedPiece.moves.length) {
      availableForMove = selectedPiece.moves.some(m => {
        return m.row === ownProps.row && m.cell === ownProps.cell;
      });
    }
  }

  return {
    isSelected,
    isSlain,
    isKing,
    availableForMove
  };
};

export default connect(mapStateToProps)(Cell);
