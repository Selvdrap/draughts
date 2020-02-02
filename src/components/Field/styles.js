import styled from "styled-components";
import { FlexContainer } from "../styles";

export const FieldWrapper = styled(FlexContainer)`
  position: relative;
  padding: 4px;
  width: 640px;
  height: 640px;
  background-image: linear-gradient(135deg, #fffff0, #f0f0f0);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1),
    inset 0px 0px 10px rgba(0, 0, 0, 1), inset 0px 0px 10px rgba(0, 0, 0, 1),
    inset 0px 0px 10px rgba(0, 0, 0, 1);

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    border: 1px inset rgba(0, 0, 0, 1);
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1),
      inset 0px 0px 10px rgba(0, 0, 0, 1), inset 0px 0px 10px rgba(0, 0, 0, 1),
      inset 0px 0px 10px rgba(0, 0, 0, 1);
  }

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
    -webkit-border-image: url(./img/border.png) 100 stretch;
    -moz-border-image: url(./img/border.png) 100 stretch;
    border-image: url(./img/border.png) 100 stretch;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1);
    outline: 1px solid rgba(0, 0, 0, 0.8);
  }
`;
