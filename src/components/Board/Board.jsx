import React from "react";
import Field from "./Field";
import Sidebox from "./Sidebox";
import Stats from "./Stats";

import { FlexContainer } from "../styles";

const Board = React.memo(() => {
  return (
    <>
      <FlexContainer>
        <Sidebox side="left">
          <Stats />
        </Sidebox>
        <Field />
        <Sidebox side="right" chat />
      </FlexContainer>
    </>
  );
});

export default Board;
