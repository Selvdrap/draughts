import React from "react";
import { connect } from "react-redux";
import Piece from "../Piece";
import {
  CountContainer,
  CountSymbol,
  CountNum,
  TurnTitle,
  TurnPlayer
} from "./styles";
import { CenterContainer } from "../styles";

class Stats extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <>
        <CountContainer>
          <CenterContainer>
            <Piece size="60px" piece="b" />
          </CenterContainer>
          <CountSymbol>X</CountSymbol>
          <CountNum>0</CountNum>
        </CountContainer>
        <CenterContainer size="60%">
          <TurnTitle>
            <span>Turn</span>
            <TurnPlayer player={player}>E</TurnPlayer>
          </TurnTitle>
        </CenterContainer>
        <CountContainer>
          <CenterContainer>
            <Piece size="60px" piece="r" />
          </CenterContainer>
          <CountSymbol>X</CountSymbol>
          <CountNum>0</CountNum>
        </CountContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.game.activePlayer
  };
};

export default connect(mapStateToProps)(Stats);
