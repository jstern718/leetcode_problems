/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let row = new Set();
    let column = new Set();
    let square = new Set();

    for (let i=0; i<9; i++){
        row[i] = new Set();
        column[i] = new Set();
        square[i] = new Set();
    }

     for (let y=0; y<9; y++){
         for(let x=0; x<9; x++){
             if (board[y][x] === "."){
                 continue;
             }
             else{
                 let sqr = Math.floor(y/3) * 3 + Math.floor(x/3);
                 if (row[y].has(board[y][x])
                     || column[x].has(board[y][x])
                     || square[sqr].has(board[y][x])){
                     // console.log("false");
                     // console.log("row", y, row[y], `== col`, x, column[x], `== sqr`, sqr, square[sqr]);
                     return false;
                 }
                 else{
                     row[y].add(board[y][x]);
                     column[x].add(board[y][x]);
                     square[sqr].add(board[y][x]);
                     // console.log("ok");
                     // console.log("row", y, row[y], `== col`, x, column[x], `== sqr`, sqr, square[sqr]);
                 }
             }

         }
     }
     return true;
 }