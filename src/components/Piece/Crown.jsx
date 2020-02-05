import React from "react";
import { CrownIcon } from "./styles";

const Crown = React.memo(({ player, size }) => {
  return <CrownIcon player={player} size={size} />;
});

export default Crown;
