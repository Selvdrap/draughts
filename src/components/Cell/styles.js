import styled, { css } from "styled-components";
import { CenterContainer } from "../styles";

export const CellWrapper = styled(CenterContainer)`
  position: relative;
  width: 12.5%;
  height: 100%;

  ${({ order }) =>
    order &&
    css`
      border: 1px solid
        ${order === "even" ? "rgba(255, 255, 255, 0.5)" : "#f0f0f0"};

      ${order === "even"
        ? `background: linear-gradient(
        135deg,
        #4c4c4c 0%,
        #666666 12%,
        #474747 39%,
        #2b2b2b 76%,
        #1c1c1c 91%,
        #131313 100%
      );`
        : ""}
    `}
`;
