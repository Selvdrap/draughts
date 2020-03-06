import React from "react";
import { connect } from "react-redux";
import Piece from "../Piece";

import { CountContainer, CountSymbol, TurnTitle, TurnPlayer, Player, Count } from "./styles";
import { CenterContainer } from "../styles";

import { ReactComponent as Timer } from "./img/timer.svg";
import { ReactComponent as SwordIcon } from "./img/sword.svg";
import { ReactComponent as FootsIcon } from "./img/footprint.svg";

const Stats = ({ turn, count, players, mustJump }) => {
  const getNickname = side => {
    const nickNames = Object.entries(players);
    if (!players || !nickNames.length) return null;

    if (nickNames[0][1] === side) return nickNames[0][0];
    return nickNames[1][0];
  };

  return (
    <>
      <CountContainer>
        <CenterContainer>
          <Piece size="60px" piece="b" />
        </CenterContainer>
        <CountSymbol>×</CountSymbol>
        <Count>{count.b}</Count>
      </CountContainer>
      <Player color="b">{getNickname("b")}</Player>
      <CenterContainer size="45%">
        <TurnTitle>
          <CenterContainer>
            <Timer />
          </CenterContainer>
          <TurnPlayer data-content="E" player={turn}>E</TurnPlayer>
          {mustJump ? <SwordIcon /> : <FootsIcon />}
        </TurnTitle>
      </CenterContainer>
      <Player color="r">{getNickname("r")}</Player>
      <CountContainer>
        <CenterContainer>
          <Piece size="60px" piece="r" />
        </CenterContainer>
        <CountSymbol>×</CountSymbol>
        <Count>{count.r}</Count>
      </CountContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    players: state.game.players,
    turn: state.game.players[state.game.turn],
    count: state.game.count,
    mustJump: state.game.mustJump
  };
};

export default connect(mapStateToProps)(Stats);
