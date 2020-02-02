import styled, { css } from "styled-components";
import { ReactComponent as HingeSvg } from "./img/hinge.svg";

export const Box = styled.div`
  position: relative;
  top: -2px;
  width: 316px;
  height: 644px;
  border: 2px inset rgba(0, 0, 0, 0.3);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1),
    inset 0px 0px 15px rgba(0, 0, 0, 1), inset 0px 0px 20px rgba(0, 0, 0, 1),
    inset 0px 0px 25px rgba(0, 0, 0, 1);
  background-image: url("./img/border.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 290% 100%;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 35px solid;
    border-image: url("./img/border.png") 100 stretch;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1);
    outline: 1px solid rgba(0, 0, 0, 0.8);
  }

  ${({ side }) =>
    side &&
    css`
      transform: ${side === "left" ? "translateX(-71px)" : "translateX(71px)"};
    `}
`;

export const Hinge = styled(HingeSvg)`
  position: absolute;
  z-index: 10;

  ${({ vertical }) =>
    vertical &&
    css`
      ${vertical}: 95px;
    `}

  ${({ horizontal }) =>
    horizontal &&
    css`
      ${horizontal === "left" ? "right" : "left"}: -61px;
    `}
`;
