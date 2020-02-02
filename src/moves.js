const pieceRules = {
  r: {
    forward: true,
    backward: false
  },
  cr: {
    forward: true,
    backward: true
  },
  b: {
    forward: false,
    backward: true
  },
  cb: {
    forward: true,
    backward: true
  }
};

const getPieceMoves = (piece, row, cell, field) => {
  const moves = [];
  const length = field[0].length;

  if (pieceRules[piece].backward) {
    const bottomLeft = row + 1 < length && cell - 1 >= 0;
    const bottomRight = row + 1 < length && cell + 1 < length;

    if (bottomLeft && field[row + 1][cell - 1] === "-") {
      moves.push({ row: row + 1, cell: cell - 1 });
    }

    if (bottomRight && field[row + 1][cell + 1] === "-") {
      moves.push({ row: row + 1, cell: cell + 1 });
    }
  }

  if (pieceRules[piece].forward) {
    const topLeft = row - 1 >= 0 && cell - 1 >= 0;
    const topRight = row - 1 >= 0 && cell + 1 < length;

    if (topLeft && field[row - 1][cell - 1] === "-") {
      moves.push({ row: row - 1, cell: cell - 1 });
    }

    if (topRight && field[row - 1][cell + 1] === "-") {
      moves.push({ row: row - 1, cell: cell + 1 });
    }
  }

  return moves;
};

const getPieceJumps = (piece, row, cell, field) => {
  const moves = [];
};

export const calculatePossibleMoves = field => {
  if(!field || !field.length) return [];
  const moves = [];

  field.forEach((row, rowIndex) => {
    const rowArr = [];

    row.forEach((cell, cellIndex) => {
      rowArr.push(
        cell === "-" ? null : getPieceMoves(cell, rowIndex, cellIndex, field)
      );
    });
    moves.push(rowArr);
  });

  return moves;
};
