import React from "react";
import { BoxWrapper } from "./styles";

const Box = React.memo(({ children, ...props }) => {
  return (
    <BoxWrapper {...props}>
      {children}
    </BoxWrapper>
  );
});

export default Box;
