import React from "react";
import Cell from "../Cell";
import { RowWrapper } from "./styles";

const Row = ({ row, index }) => {
  return (
    <RowWrapper>
      {row.map((piece, i) => {
        return <Cell piece={piece} row={index} cell={i} key={`cell-${i}`} />;
      })}
    </RowWrapper>
  );
};

export default Row;
