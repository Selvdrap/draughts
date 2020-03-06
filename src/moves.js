class Board {
  constructor() {
    this.players = {};
    this.count = {
      b: 0,
      r: 0,
      gameMoves: 0
    };

    this.selectedPiece = null;
    this.mustJump = null;
    this.lockedPiece = null;

    this.directions = {
      r: [[-1, -1], [-1, 1]],
      b: [[1, -1], [1, 1]]
    };
  }
  //  Fills the field with pieces
  initialize(players) {
    this.players[players[0]] = "b";
    this.players[players[1]] = "r";
    this.field = JSON.parse(JSON.stringify(initialField));
    this.pieces = [];
    this.turn = players[0];

    initialField.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === "b") {
          this.pieces.push(
            new Piece(this.players[players[0]], rowIndex, cellIndex, this)
          );
          this.count.b++;
        }
        if (cell === "r") {
          this.pieces.push(
            new Piece(this.players[players[1]], rowIndex, cellIndex, this)
          );
          this.count.r++;
        }
      });
    });
    this.checkGameStatus();
  }
  // Checks who should act and whether the game is over
  checkGameStatus() {
    const players = Object.keys(this.players);
    this.turn = this.turn === players[0] ? players[1] : players[0];
    this.selectedPiece = null;
    let canAct = 0;

    this.pieces.forEach(p => {
      p.getPossibleJumps(this.players[this.turn]);
      p.getPossibleMoves(this.players[this.turn]);

      canAct = Math.max(canAct, p.jumps.length, p.moves.length);
    });

    if(this.count.gameMoves >= 100) {
      alert("Draw!");
    }

    if (!this.count[this.players[this.turn]] || !canAct) {
      for (let player in this.players) {
        if (player !== this.turn) {
          alert(`${player} wins!`);
        }
      }
    }
  }
  // Finds the piece
  findPiece(row, cell) {
    return this.pieces.find(p => {
      return p.row === row && p.cell === cell;
    });
  }
  // Selects the piece if its color matches active player's color and there is no locked piece
  selectPiece(row, cell) {
    const piece = this.findPiece(row, cell);
    if (piece && piece.canBeSelected(this)) {
      if (
        this.lockedPiece &&
        this.lockedPiece.row === row &&
        this.lockedPiece.cell === cell
      ) {
        this.selectedPiece = piece;
      } else {
        this.selectedPiece = piece;
      }
    } else if (!this.selectedPiece) {
      this.selectedPiece = null;
    }

    return this.selectedPiece;
  }
  // Check if the cell is empty
  isCellEmpty(row, cell) {
    return this.field[row] && this.field[row][cell] === null;
  }
  // Check if the cell is an enemy to the piece
  isCellEnemy(row, cell, player) {
    return (
      this.field[row] &&
      this.field[row][cell] !== null &&
      this.field[row][cell] !== player
    );
  }
}

class Piece {
  constructor(player, row, cell, board) {
    this.board = board;
    this.player = player;
    this.row = row;
    this.cell = cell;
    this.king = false;
    this.moves = [];
    this.jumps = [];

    this.canBeSelected = this.canBeSelected.bind(this);
    this.getPossibleMoves = this.getPossibleMoves.bind(this);
    this.getPossibleJumps = this.getPossibleJumps.bind(this);
    this.move = this.move.bind(this);
    this.jump = this.jump.bind(this);
    this.remove = this.remove.bind(this);
    this.executeAction = this.executeAction.bind(this);
  }
  // Moves the piece to the new place leaving the previous location empty
  executeAction(t) {
    this.board.field[this.row][this.cell] = null;
    this.row = t.row;
    this.cell = t.cell;
    this.board.field[this.row][this.cell] = this.player;

    // Трансформация в дамки
    const length = this.board.field[0].length - 1;
    if (this.player === "b" && this.row === length) {
      this.king = true;
    }

    if (this.player === "r" && !this.row) {
      this.king = true;
    }
  }
  // Removes the piece from the field
  remove() {
    this.board.field[this.row][this.cell] = null;
    this.board.pieces = this.board.pieces.filter(p => {
      return p.row !== this.row || p.cell !== this.cell;
    });
  }
  // Checks if the color of the chosen piece matches the active player and there is room for either attack or maneuver
  canBeSelected() {
    if (this.player === this.board.players[this.board.turn]) {
      if ((this.moves.length && !this.board.mustJump) || this.jumps.length)
        return true;
    }
  }
  // Finds all possible attack options for the piece which matches active player, also sets mustJump flag which blocks movement
  getPossibleJumps(player) {
    this.jumps = [];
    if (this.player === player) {
      const length = this.board.field[0].length;
      const directions = Object.values(this.board.directions).flat();

      outer: for (let dir of directions) {
        let rowDir = dir[0];
        let cellDir = dir[1];

        while (
          this.row + rowDir >= 0 &&
          this.row + rowDir < length &&
          this.cell + cellDir >= 0 &&
          this.cell + cellDir < length
        ) {
          if (
            this.board.isCellEnemy(
              this.row + rowDir,
              this.cell + cellDir,
              player
            )
          ) {
            const enemy = this.board.findPiece(
              this.row + rowDir,
              this.cell + cellDir
            );

            const behindRow = dir[0] < 0 ? -1 : 1;
            const behindCell = dir[1] < 0 ? -1 : 1;
            if (
              enemy &&
              this.board.isCellEmpty(
                enemy.row + behindRow,
                enemy.cell + behindCell
              )
            ) {
              this.jumps.push({
                target: {
                  row: enemy.row + behindRow,
                  cell: enemy.cell + behindCell
                },
                slain: enemy
              });
              this.board.mustJump = true;
            }
            continue outer;
          } else {
            if (
              this.king &&
              this.board.isCellEmpty(this.row + rowDir, this.cell + cellDir)
            ) {
              rowDir = rowDir < 0 ? rowDir - 1 : rowDir + 1;
              cellDir = cellDir < 0 ? cellDir - 1 : cellDir + 1;
            } else {
              continue outer;
            }
          }
          if (!this.king) continue outer;
        }
      }
    }
  }
  // Slays a piece if there are any options for attack
  jump(t) {
    let slainPiece = {};
    const jumpExists = this.jumps.find(j => {
      if (j.target.row === t.row && j.target.cell === t.cell) {
        slainPiece = j.slain;
        return true;
      }
      return false;
    });

    if (jumpExists) {
      this.executeAction(t);
      if (slainPiece.player === "b") {
        this.board.count.b--;
      } else {
        this.board.count.r--;
      }
      slainPiece.remove();
      this.jumps = [];

      this.getPossibleJumps(this.player);
      if (this.jumps.length) {
        this.board.lockedPiece = this;
      } else {
        this.board.mustJump = false;
        this.board.lockedPiece = null;
        this.board.checkGameStatus();
      }
    }
    this.board.count.gameMoves++;
    return this.board;
  }
  // Finds all possible move options for the piece which matches current player
  getPossibleMoves(player) {
    this.moves = [];
    if (!this.board.mustJump && this.player === player) {
      const length = this.board.field[0].length;
      let directions = this.board.directions[
        this.board.players[this.board.turn]
      ];
      if (this.king) {
        directions = Object.values(this.board.directions).flat();
      }

      outer: for (let dir of directions) {
        let rowDir = dir[0];
        let cellDir = dir[1];

        let emptyCell = this.board.isCellEmpty(
          this.row + rowDir,
          this.cell + cellDir
        );

        if (emptyCell) {
          this.moves.push({
            row: this.row + rowDir,
            cell: this.cell + cellDir
          });
        }

        if (emptyCell && this.king) {
          while (
            this.row + rowDir >= 0 &&
            this.row + rowDir < length &&
            this.cell + cellDir >= 0 &&
            this.cell + cellDir < length
          ) {
            rowDir = rowDir < 0 ? rowDir - 1 : rowDir + 1;
            cellDir = cellDir < 0 ? cellDir - 1 : cellDir + 1;

            emptyCell = this.board.isCellEmpty(
              this.row + rowDir,
              this.cell + cellDir
            );

            if (!emptyCell) continue outer;

            if (emptyCell) {
              this.moves.push({
                row: this.row + rowDir,
                cell: this.cell + cellDir
              });
            }
          }
        }
      }
    }
  }
  // Starts to move the piece if there are options for maneuver
  move(t) {
    if (this.moves.find(m => m.row === t.row && m.cell === t.cell)) {
      this.executeAction(t);
      this.board.checkGameStatus();
    }
    this.board.count.gameMoves++;
    return this.board;
  }
}

const initialField = [
  [null, "b", null, "b", null, "b", null, "b"],
  ["b", null, "b", null, "b", null, "b", null],
  [null, "b", null, "b", null, "b", null, "b"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["r", null, "r", null, "r", null, "r", null],
  [null, "r", null, "r", null, "r", null, "r"],
  ["r", null, "r", null, "r", null, "r", null]
];

export const createGame = () => {
  const players = ["AI", "Selvdrap"];
  const board = new Board();
  board.initialize(players);
  return board;
};
