/**
 * @param {character[][]} board
 * @return {boolean}
 */

export function isValidSudoku(board) {
  const row = Array.from(Array(9), () => ({})),
    col = Array.from(Array(9), () => ({})),
    box = Array.from(Array(9), () => ({}))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j]
      if (val === '.') continue
      const k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (row[i][val] || col[j][val] || box[k][val]) {
        return false
      } else {
        row[i][val] = col[j][val] = box[k][val] = true
      }
    }
  }
  return true
}
