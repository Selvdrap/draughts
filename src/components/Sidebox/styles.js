import Box from "../Box";
import styled, { css } from "styled-components";
import { ReactComponent as HingeSvg } from "./img/hinge.svg";

export const BoxWrapper = styled(Box)`
  position: relative;
  z-index: 20;
  margin: 0;

  ${({ side }) =>
    side &&
    css`
      ${side}: -37px;
    `}
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3),
    inset 0px 0px 10px rgba(0, 0, 0, 1), inset 0px 0px 15px rgba(0, 0, 0, 1),
    inset 0px 0px 20px rgba(0, 0, 0, 1), inset 0px 0px 25px rgba(0, 0, 0, 1);
  outline: 1px solid rgba(0, 0, 0, 0.8);
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
