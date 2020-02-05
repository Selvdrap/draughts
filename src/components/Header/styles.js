import styled from "styled-components";
import { CenterContainer } from "../styles";

export const HeaderWrapper = styled.div`
  transform: translateY(-80px);
`;

export const Heading = styled(CenterContainer)`
  margin: 0;
  color: #f0f0f0;
  font-size: 100px;
  font-family: BLKCHCRY, serif;
  user-select: none;
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
