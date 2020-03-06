import React from "react";
import { PieceWrapper } from "./styles";
import Crown from "./Crown";

const Piece = React.memo(({ piece, size, active, king }) => {
  return (
    <PieceWrapper data-player={piece} piece={piece} size={size} active={active}>
      <Crown player={piece} king={king} />
    </PieceWrapper>
  );
});

export default Piece;
