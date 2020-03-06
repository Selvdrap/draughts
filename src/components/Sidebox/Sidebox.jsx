import React from "react";
import { BoxWrapper, Wrapper, Hinge } from "./styles";

const Sidebox = React.memo(({ side, children }) => {
  return (
    <BoxWrapper width="386px" height="712px" side={side}>
      <Hinge vertical="top" horizontal={side} />
      <Hinge vertical="bottom" horizontal={side} />
      <Wrapper>{children}</Wrapper>
    </BoxWrapper>
  );
});

export default Sidebox;
