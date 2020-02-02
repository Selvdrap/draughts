import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CenterContainer = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  height: ${({ size }) => size};
`;
