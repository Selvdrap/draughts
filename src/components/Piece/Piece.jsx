import React from "react";
import { PieceWrapper } from "./styles";
import Crown from "./Crown";

const Piece = ({ piece, crown, size, active }) => {
  return (
    <PieceWrapper data-player={piece} piece={piece} size={size} active={active}>
      <Crown player={piece} />
    </PieceWrapper>
  );
};

export default Piece;
