import React from "react";
import { CrownIcon } from "./styles";

const Crown = ({ crown, player, size }) => {
  return <CrownIcon player={player} crown={crown} size={size} />;
};

export default Crown;
