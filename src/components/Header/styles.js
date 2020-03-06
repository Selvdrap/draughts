import styled, { css, keyframes } from "styled-components";
import { CenterContainer } from "../styles";

const duration = 1.5;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-500px);  
  }

  75% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
    transform: translateY(0);  
  }
`;

const moveAndRotate = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(-450px) rotate(-360deg);
  }
`;

const hideLogo = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeText = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-400px);
    opacity: 0;
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: -50px;
  animation: ${appear} ${duration}s ease-out;
`;

export const Heading = styled(CenterContainer)`
  margin: 0;
  color: #f0f0f0;
  font-family: CaslonAntique;
  font-size: 100px;
  user-select: none;
`;

export const HeadingLetter = styled.span`
  /* ${({ order }) => {
    return order &&
      css`
        animation-name: ${fadeText};
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-delay: ${order * 0.3 + duration * 0.8}s;
        animation-fill-mode: forwards;
      `;
  }} */
`;

export const Logo = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-left: 25px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 2px inset rgba(0, 0, 0, 1);
  font-family: BierUndWein;
  font-size: 130px;
  transition: color 0.2s ease;
  user-select: none;
  white-space: pre;
  color: crimson;
  /* animation: ${moveAndRotate} 2.5s ease-in ${duration}s forwards,
          ${hideLogo} 2.5s ease ${duration * 2.5}s forwards; */

  ::before {
    display: block;
    z-index: 1;
    position: absolute;
    top: 0;
    width: 50%;
    content: attr(data-content);
    pointer-events: none;
    overflow: hidden;
    color: royalblue;
  }
`;
