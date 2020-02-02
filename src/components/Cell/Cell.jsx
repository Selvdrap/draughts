import React from "react";
import { connect } from "react-redux";
import { CellWrapper } from "./styles";
import Piece from "../Piece";

class Cell extends React.Component {
  isActive = () => {
    const { activePiece, row, cell } = this.props;
    if (!activePiece) return false;

    return activePiece.row === row && activePiece.cell === cell;
  };

  render() {
    const { piece, row, cell } = this.props;
    const order = (row + cell) % 2 ? "odd" : "even";

    return (
      <CellWrapper data-row={row} data-cell={cell} order={order}>
        {piece !== "-" ? (
          <Piece piece={piece} active={this.isActive()} />
        ) : null}
      </CellWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    activePiece: state.game.activePiece
  };
};

export default connect(mapStateToProps)(Cell);
