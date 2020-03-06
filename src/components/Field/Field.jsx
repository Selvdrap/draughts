import React from "react";
import { connect } from "react-redux";
import { startNewGame, checkAction } from "../../actions";
import { FieldWrapper } from "./styles";
import Row from "../Row";

class Field extends React.Component {
  componentDidMount() {
    this.props.startNewGame();
  }

  handleClick = ({ target }) => {
    this.props.checkAction(target);
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
    field: state.field
  };
};

export default connect(
  mapStateToProps,
  { startNewGame, checkAction }
)(Field);
