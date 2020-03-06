import styled from "styled-components";
import { CenterContainer } from "../styles";

export const CountContainer = styled(CenterContainer)`
  height: 20%;
  padding: 0 35px;
  color: #f0f0f0;
  font-size: 50px;
  text-align: center;
  user-select: none;
`;

export const Count = styled.span`
  min-width: 25%;
`;

export const CountSymbol = styled.span`
  margin: 0 auto;
`;

export const TurnTitle = styled(CenterContainer)`
  font-size: 45px;
  color: #f0f0f0;
  user-select: none;
`;

export const Player = styled.div`
  max-width: 100%;
  text-align: center;
  font-family: CaslonAntique;
  font-size: 40px;
  color: ${({ color }) => (color === "r" ? "crimson" : "royalblue")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TurnPlayer = styled.span`
  position: relative;
  overflow: hidden;
  min-width: 25%;
  margin: 0 25px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 2px inset rgba(0, 0, 0, 1);
  font-family: BierUndWein;
  font-size: 110px;
  transform-origin: 50% 50%;
  transition: color 0.2s ease;
  user-select: none;

  ::before,
  ::after {
    display: block;
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    content: attr(data-content);
    overflow: hidden;
    pointer-events: none;
    transition: top 1s ease, bottom 1s ease;
  }

  ::before {
    top: ${({player}) => player === "b" ? "0" : "-100%" };
    color: royalblue;
  }

  ::after {
    bottom: ${({player}) => player === "r" ? "0" : "-100%" };
    color: crimson;
  }
`;
