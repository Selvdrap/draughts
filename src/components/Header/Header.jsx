import React from "react";
import { HeaderWrapper, Heading, HeadingLetter, Logo } from "./styles";

const Header = React.memo(() => {
  return (
    <HeaderWrapper>
      <Heading>
        <div>
          <HeadingLetter order={8}>D</HeadingLetter>
          <HeadingLetter order={7}>r</HeadingLetter>
          <HeadingLetter order={6}>a</HeadingLetter>
          <HeadingLetter order={5}>u</HeadingLetter>
          <HeadingLetter order={4}>g</HeadingLetter>
          <HeadingLetter order={3}>h</HeadingLetter>
          <HeadingLetter order={2}>t</HeadingLetter>
          <HeadingLetter order={1}>s</HeadingLetter>
        </div>
        <Logo logged data-content="E">E</Logo>
      </Heading>
    </HeaderWrapper>
  );
});

export default Header;
