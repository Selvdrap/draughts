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

export const AppWrapper = styled(CenterContainer)`
  flex-direction: column;
  padding-top: 5%;

  @media screen and (min-width: 1930px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 1500px) {
    transform: scale(0.7);
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    transform: scale(0.85);
    padding-bottom: 7%;
  }

  @media screen and (max-width: 500px) {
    transform: scale(0.44);
  }
`;
