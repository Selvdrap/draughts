import React from "react";
import Field from "../Field";
import Sidebox from "../Sidebox";
import Stats from "../Stats";

const Game = React.memo(() => {
  return (
    <>
      <Sidebox side="left">
        <Stats />
      </Sidebox>
      <Field />
      <Sidebox side="right"></Sidebox>
    </>
  );
});

export default Game;
