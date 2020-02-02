import styled from "styled-components";
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
  font-size: 50px;
`;

export const CountNum = styled.span`
  font-size: 60px;
`;

export const TurnTitle = styled(CenterContainer)`
  font-size: 45px;
  color: #f0f0f0;
  user-select: none;
`;

export const TurnPlayer = styled.span`
  margin-left: 25px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 2px inset rgba(0, 0, 0, 1);
  font-family: BierUndWein;
  font-size: 130px;
  transition: color 0.2s ease;
  user-select: none;
  font-size: 110px;
  color: ${({ player }) => (player === "r" ? "crimson" : "royalblue")};
`;
