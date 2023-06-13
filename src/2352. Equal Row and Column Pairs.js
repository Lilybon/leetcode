/**
 * @param {number[][]} grid
 * @return {number}
 */

export function equalPairs(grid) {
  const n = grid.length,
    trie = {}
  for (let i = 0; i < n; i++) {
    let dict = trie
    for (let j = 0; j < n; j++) {
      const char = grid[i][j]
      if (!dict[char]) dict[char] = {}
      dict = dict[char]
    }
    dict.count = (dict.count || 0) + 1
  }

  let count = 0
  for (let i = 0; i < n; i++) {
    let dict = trie
    for (let j = 0; j < n; j++) {
      const char = grid[j][i]
      if (!dict[char]) break
      dict = dict[char]
    }
    if (dict.count) count += dict.count
  }
  return count
}
