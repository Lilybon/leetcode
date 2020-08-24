/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function solve(board) {
  if (!board || !board[0] || !board[0].length) return
  const maxRIdx = board.length - 1
  const maxCIdx = board[0].length - 1
  for (let r = 0; r <= maxRIdx; r++) {
    for (let c = 0; c <= maxCIdx; c++) {
      if (board[r][c] === 'O' && atBorder(r, c)) mark(r, c)
    }
  }
  for (let r = 0; r <= maxRIdx; r++) {
    for (let c = 0; c <= maxCIdx; c++) {
      if (board[r][c] === 'O') board[r][c] = 'X'
      if (board[r][c] === '$') board[r][c] = 'O'
    }
  }

  function atBorder(rIdx, cIdx) {
    return rIdx === 0 || rIdx === maxRIdx || cIdx === 0 || cIdx === maxCIdx
  }

  function mark(rIdx, cIdx) {
    if (board[rIdx][cIdx] === 'X' || board[rIdx][cIdx] === '$') return
    board[rIdx][cIdx] = '$' // surround type area label
    if (rIdx - 1 >= 0) mark(rIdx - 1, cIdx)
    if (rIdx + 1 <= maxRIdx) mark(rIdx + 1, cIdx)
    if (cIdx - 1 >= 0) mark(rIdx, cIdx - 1)
    if (cIdx + 1 <= maxCIdx) mark(rIdx, cIdx + 1)
  }
}
