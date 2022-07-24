/**
 * @param {number[][]} grid
 * @return {number}
 */

export function equalPairs(grid) {
  const m = grid.length,
    n = grid[0].length,
    trie = {}
  for (let i = 0; i < m; i++) {
    let container = trie
    for (let j = 0; j < n; j++) {
      const char = grid[i][j]
      if (!container[char]) container[char] = {}
      container = container[char]
    }
    container.count = (container.count || 0) + 1
  }

  let count = 0
  for (let i = 0; i < n; i++) {
    let container = trie
    for (let j = 0; j < m; j++) {
      const char = grid[j][i]
      if (!container[char]) break
      container = container[char]
    }
    if (container.count) count += container.count
  }
  return count
}
