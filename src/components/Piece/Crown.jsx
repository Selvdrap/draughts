import React from "react";
import { CrownIcon } from "./styles";

const Crown = React.memo((props) => {
  return <CrownIcon {...props} king={props.king ? props.king.toString() : undefined} />;
});

export default Crown;
