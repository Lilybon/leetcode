/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
export function exist (board, word) {
  if (!board.length || !board[0].length) return false
  const m = board.length
  const n = board[0].length
  const visited = Array(m).fill().map(_ => Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (search(i, j, 0)) return true
    }
  }
  return false
  function search (x, y, idx) {
    if (idx >= word.length) return true
    if (x < 0 ||
        x >= m ||
        y < 0 ||
        y >= n ||
        visited[x][y] ||
        board[x][y] !== word[idx]) return false
    visited[x][y] = true
    let found = search(x + 1, y, idx + 1) ||
       search(x - 1, y, idx + 1) ||
       search(x, y + 1, idx + 1) ||
       search(x, y - 1, idx + 1)
    visited[x][y] = false
    return found
  }
}
 */

// reset original board grid value when backtracking
export function exist(board, word) {
  if (!board.length || !board[0].length) return false
  const m = board.length
  const n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (search(i, j, 0)) return true
    }
  }
  return false
  function search(x, y, idx) {
    if (idx >= word.length) return true
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      board[x][y] === '@@' ||
      board[x][y] !== word[idx]
    )
      return false
    let backup = board[x][y]
    board[x][y] = '@@'
    let found =
      search(x + 1, y, idx + 1) ||
      search(x - 1, y, idx + 1) ||
      search(x, y + 1, idx + 1) ||
      search(x, y - 1, idx + 1)
    board[x][y] = backup
    return found
  }
}
