import React from "react";
import { connect } from "react-redux";
import { setActivePlayer, selectPiece, movePiece } from "../../actions/index";
import { FieldWrapper } from "./styles";
import Row from "../Row";

class Field extends React.Component {
  componentDidMount() {
    this.props.setActivePlayer("r");
  }

  handleClick = ({ target }) => {
    const {
      selectPiece,
      movePiece,
      activePlayer,
      activePiece,
      moves
    } = this.props;

    if (!activePiece && target.dataset.cell) return;

    const parent = target.parentElement;
    const piece = target.dataset.player;
    if (piece) {
      if (piece === activePlayer) {
        selectPiece(piece, +parent.dataset.row, +parent.dataset.cell);
      }
      return;
    }

    if (target.dataset.cell) {
      moves.forEach(move => {
        if (
          move.row === +target.dataset.row &&
          move.cell === +target.dataset.cell
        ) {
          const source = { row: activePiece.row, cell: activePiece.cell };
          const targetCell = {
            row: +target.dataset.row,
            cell: +target.dataset.cell
          };
          movePiece(source, targetCell, activePlayer);
        }
      });
    }
  };

  render() {
    const { field } = this.props;
    return (
      <FieldWrapper onClick={this.handleClick}>
        {field.map((row, i) => {
          return <Row key={i} row={row} index={i}></Row>;
        })}
      </FieldWrapper>
    );
  }
}

const mapStateToProps = state => {
  let moves = [];
  if (state.game.activePiece) {
    const row = state.game.activePiece.row;
    const cell = state.game.activePiece.cell;
    moves = state.possibleMoves[row][cell];
  }

  return {
    field: state.field,
    activePlayer: state.game.activePlayer,
    activePiece: state.game.activePiece,
    moves
  };
};

export default connect(
  mapStateToProps,
  { setActivePlayer, selectPiece, movePiece }
)(Field);
