import React from "react";
import { Box, Hinge } from "./styles";

const Sidebox = ({ side, children }) => {
  return (
    <Box side={side}>
      <Hinge vertical="top" horizontal={side} />
      <Hinge vertical="bottom" horizontal={side} />
      {children}
    </Box>
  );
};

export default Sidebox;
