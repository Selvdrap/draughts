import React from "react";
import { connect } from "react-redux";
import { startNewGame, selectPiece, movePiece, jumpPiece } from "../../actions";
import { FieldWrapper } from "./styles";
import Row from "../Row";

class Field extends React.Component {
  state = {
    fieldStr: ""
  };

  componentDidMount() {
    this.props.startNewGame();
  }

  shouldComponentUpdate(nextProps) {
    const fieldStr = nextProps.field.flat().join("");
    if (this.state.fieldStr !== fieldStr) {
      this.setState({ fieldStr });
      return true;
    }
    return false;
  }

  handleClick = ({ target }) => {
    const {
      selectedPiece,
      activePlayer,
      selectPiece,
      movePiece,
      jumpPiece,
      mustJump
    } = this.props;

    const child = target.firstChild || target;

    if (!target.dataset.row && !target.dataset.player && !child.dataset.player)
      return;
    if (!target.dataset.player && !selectedPiece && !child.dataset.player)
      return;

    if (target.dataset.player && target.dataset.player === activePlayer) {
      const parent = target.parentElement;
      selectPiece(+parent.dataset.row, +parent.dataset.cell);
      return;
    }

    if (selectedPiece && target.dataset.row) {
      let allow = selectedPiece.moves.some(m => {
        return m.row === +target.dataset.row && m.cell === +target.dataset.cell;
      });

      if (allow && !mustJump) {
        movePiece(+target.dataset.row, +target.dataset.cell);
        return;
      }

      allow = selectedPiece.jumps.some(m => {
        return (
          m.target.row === +target.dataset.row &&
          m.target.cell === +target.dataset.cell
        );
      });

      if (allow) {
        jumpPiece(+target.dataset.row, +target.dataset.cell);
        return;
      }
    }
  };

  render() {
    const { field } = this.props;
    return (
      <FieldWrapper onClick={this.handleClick}>
        {field.map((row, i) => {
          return <Row key={`row-${i}`} row={row} index={i}></Row>;
        })}
      </FieldWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    field: state.field,
    activePlayer: state.game.players[state.game.turn],
    selectedPiece: state.game.selectedPiece,
    mustJump: state.game.mustJump
  };
};

export default connect(
  mapStateToProps,
  { startNewGame, selectPiece, movePiece, jumpPiece }
)(Field);
