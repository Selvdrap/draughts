import styled, { css, keyframes } from "styled-components";
import { CenterContainer } from "../styles";
import RedImg from "./img/red-piece.jpg";
import BlueImg from "./img/blue-piece.jpg";
import { ReactComponent as Crown } from "./img/crown.svg";

const Rotating = keyframes`
  0% {
    transform: scale(1.3) rotate(0deg);
  }
  100% {
    transform: scale(1.3) rotate(360deg);
  }
`;

const Lift = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
`;

export const PieceWrapper = styled(CenterContainer)`
  position: relative;
  z-index: 10;
  border-radius: 50%;
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    height: 70%;
    width: 70%;
    border-radius: 50%;
    border: 1px solid;
  }

  ${({ size = "80%" }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}

  ${({ piece }) =>
    piece &&
    css`
      background-image: ${piece === "r" ? `url(${RedImg})` : `url(${BlueImg})`};
      border-color: ${piece === "r"
        ? "rgba(0, 0, 0, 0.6)"
        : "rgba(255, 255, 255, 0.6)"};
      box-shadow: ${piece === "r" ? "0 0 3px #000" : "0 0 3px #f0f0f0"};
      ::after {
        box-shadow: ${piece === "r" ? "0 0 3px #000" : "0 0 3px #f0f0f0"};
        border-color: ${piece === "r"
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)"};
      }
    `}
  
  ${({ active }) =>
    active &&
    css`
      transform: scale(1.3);
      animation: ${Lift} 0.3s linear, ${Rotating} 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.35s infinite;
    `}
`;

export const CrownIcon = styled(Crown)`
  ${({ size = "32px" }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}

  ${({ player }) =>
    player &&
    css`
      fill: ${player === "r" ? "#333" : "#fff"};
    `}
`;
