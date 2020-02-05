import React from "react";
import { connect } from "react-redux";
import Piece from "../Piece";
import {
  CountContainer,
  CountSymbol,
  CountNum,
  TurnTitle,
  TurnPlayer,
  Player
} from "./styles";
import { CenterContainer } from "../styles";

class Stats extends React.Component {
  getNickname(side) {
    const { players } = this.props;
    const nickNames = Object.entries(players);
    if (!players || !nickNames.length) return null;

    if (nickNames[0][1] === side) return nickNames[0][0];
    return nickNames[1][0];
  }

  render() {
    const { turn, count } = this.props;

    return (
      <>
        <CountContainer>
          <CenterContainer>
            <Piece size="60px" piece="b" />
          </CenterContainer>
          <CountSymbol>X</CountSymbol>
          <CountNum>{count.b}</CountNum>
        </CountContainer>
        <Player color="b">{this.getNickname("b")}</Player>
        <CenterContainer size="45%">
          <TurnTitle>
            <span>Turn</span>
            <TurnPlayer player={turn}>E</TurnPlayer>
          </TurnTitle>
        </CenterContainer>
        <Player color="r">{this.getNickname("r")}</Player>
        <CountContainer>
          <CenterContainer>
            <Piece size="60px" piece="r" />
          </CenterContainer>
          <CountSymbol>X</CountSymbol>
          <CountNum>{count.r}</CountNum>
        </CountContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.game.players,
    turn: state.game.players[state.game.turn],
    count: state.game.count
  };
};

export default connect(mapStateToProps)(Stats);
