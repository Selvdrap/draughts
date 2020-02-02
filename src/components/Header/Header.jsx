import React from "react";
import { HeaderWrapper, Heading, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>
        <span>Checkers</span>
        <Logo data-content="E">E</Logo>
      </Heading>
    </HeaderWrapper>
  );
};

export default Header;
