/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

export function gameOfLife(board) {
  /*
    status of board definition:
      0 = dead before, dead after.
      1 = alive before, alive after.
      2 = alive before, dead after.
      3 = dead before, alive after.
   */
  const m = board.length,
    n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = setStatus(board, i, j, m, n)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] %= 2
    }
  }
}

function setStatus(board, x, y, m, n) {
  const xMin = Math.max(0, x - 1),
    xMax = Math.min(m - 1, x + 1),
    yMin = Math.max(0, y - 1),
    yMax = Math.min(n - 1, y + 1)
  let liveCount = 0
  for (let i = xMin; i <= xMax; i++) {
    for (let j = yMin; j <= yMax; j++) {
      if (i !== x || j !== y) {
        if (board[i][j] === 2) liveCount += 1
        else if (board[i][j] === 3) liveCount += 0
        else liveCount += board[i][j]
      }
    }
  }
  if (board[x][y] === 1 && (liveCount < 2 || liveCount > 3)) return 2
  else if (board[x][y] === 0 && liveCount === 3) return 3
  else return board[x][y]
}
