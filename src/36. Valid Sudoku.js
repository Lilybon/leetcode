/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
  let row = new Array(9),
    col = new Array(9),
    box = new Array(9)
  for (let i = 0; i < 9; i++) {
    row[i] = {}
    col[i] = {}
    box[i] = {}
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j]
      if (val === '.') continue
      let k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (row[i][val] || col[j][val] || box[k][val]) {
        return false
      } else {
        row[i][val] = col[j][val] = box[k][val] = 1
      }
    }
  }
  return true
}
