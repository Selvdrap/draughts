const players = ["Dude", "Selvdrap"];
const board = new Board();
board.initialize(players);

board.selectPiece(5, 1);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

// console.log(board.turn);
board.selectPiece(2, 0);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

// console.log(board.turn);
board.selectPiece(4, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 0 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

// console.log(board.turn);
board.selectPiece(2, 2);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

// console.log(board.turn);
board.selectPiece(2, 0);
board.selectedPiece && board.selectedPiece.jump({ row: 4, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

// console.log(board.turn);
board.selectPiece(1, 1);
board.selectedPiece && board.selectedPiece.move({ row: 2, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(6, 0);
board.selectedPiece && board.selectedPiece.move({ row: 5, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 2);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(4, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 0 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 2);
board.selectedPiece && board.selectedPiece.move({ row: 1, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 0);
board.selectedPiece && board.selectedPiece.jump({ row: 0, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 6);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 7 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(5, 5);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 4 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 4);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 5 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 4 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 4);
board.selectedPiece && board.selectedPiece.jump({ row: 4, cell: 6 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(3, 7);
board.selectedPiece && board.selectedPiece.jump({ row: 5, cell: 5 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(5, 5);
board.selectedPiece && board.selectedPiece.jump({ row: 3, cell: 3 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(5, 3);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 4);
board.selectedPiece && board.selectedPiece.move({ row: 1, cell: 3 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(4, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 4 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 4);
board.selectedPiece && board.selectedPiece.jump({ row: 0, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 0);
board.selectedPiece && board.selectedPiece.move({ row: 1, cell: 1 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 0 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(1, 7);
board.selectedPiece && board.selectedPiece.move({ row: 2, cell: 6 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(5, 7);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 6 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(1, 5);
board.selectedPiece && board.selectedPiece.move({ row: 2, cell: 4 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(4, 6);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 7 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(0, 6);
board.selectedPiece && board.selectedPiece.move({ row: 1, cell: 5 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(5, 1);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 2 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 4);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 3 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(4, 2);
board.selectedPiece && board.selectedPiece.jump({ row: 2, cell: 4 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 4);
board.selectedPiece && board.selectedPiece.jump({ row: 0, cell: 6 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(2, 6);
board.selectedPiece && board.selectedPiece.move({ row: 3, cell: 5 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(7, 1);
board.selectedPiece && board.selectedPiece.move({ row: 6, cell: 0 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(3, 5);
board.selectedPiece && board.selectedPiece.move({ row: 4, cell: 6 }, board);

// console.log("FIELD");
// board.field.forEach(row => console.log(row));
// console.log("------------------------");

board.selectPiece(3, 7);
board.selectedPiece && board.selectedPiece.jump({ row: 5, cell: 5 }, board);

console.log("FIELD");
board.field.forEach(row => console.log(row));
console.log("------------------------");
