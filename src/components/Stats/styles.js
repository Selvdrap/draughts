import styled, { css, keyframes } from "styled-components";
import { FlexContainer, CenterContainer } from "../styles";

export const CountContainer = styled(FlexContainer)`
  height: 20%;
  justify-content: space-around;
  align-items: center;
  color: #f0f0f0;
  text-align: center;
  user-select: none;
`;

export const CountSymbol = styled.span`
  font-size: 40px;
`;

export const CountNum = styled.span`
  font-size: 50px;
`;

export const TurnTitle = styled(CenterContainer)`
  font-size: 45px;
  color: #f0f0f0;
  user-select: none;
`;

export const Player = styled.div`
  max-width: 100%;
  text-align: center;
  font-size: 40px;
  color: ${({ color }) => (color === "r" ? "crimson" : "royalblue")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const flipForward = keyframes`
  0% {
    transform: scale(1) rotateY(0);
  }
  25% {
    transform: scale(1.15) rotateY(90deg);
  }
  50% {
    transform: scale(1.2) rotateY(180deg);
  }
  75% {
    transform: scale(1.15) rotateY(270deg);
  }
  100% {
    transform: scale(1) rotateY(360deg);
  }
`;

const flipBackward = keyframes`
  0% {
    transform: scale(1) rotateY(360deg);
  }
  25% {
    transform: scale(1.15) rotateY(270deg);
  }
  50% {
    transform: scale(1.2) rotateY(180deg);
  }
  75% {
    transform: scale(1.15) rotateY(90deg);
  }
  100% {
    transform: scale(1) rotateY(0);
  }
`;

export const TurnPlayer = styled.span`
  margin-left: 25px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 2px inset rgba(0, 0, 0, 1);
  font-family: BierUndWein;
  font-size: 110px;
  transform-origin: 50% 50%;
  transition: color 0.2s ease;
  user-select: none;
  ${({ player }) =>
    player &&
    css`
      color: ${player === "r" ? "crimson" : "royalblue"};
      animation: ${player === "r" ? flipForward : flipBackward} 1s ease;
    `}
`;
