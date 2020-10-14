/**
 * @param {number[][]} dungeon
 * @return {number}
 */

/*
export function calculateMinimumHP (dungeon) {
  let m = dungeon.length
  let n = dungeon[0].length
  let hp = []
  
  for (let i = 0; i < m + 1; i++) {
    hp[i] = new Array(n + 1).fill(undefined)
    for (let j = 0; j < n + 1; j++) {
      if (j === n || i === m) hp[i][j] = Number.MAX_VALUE
    }
  }
  hp[m][n - 1] = hp[m - 1][n] = 1
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      hp[i][j] = Math.max(1, Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j])
    } 
  }
  return hp[0][0]
}
 */

export function calculateMinimumHP(dungeon) {
  let m = dungeon.length
  let n = dungeon[0].length
  let hp = new Array(n + 1).fill(Number.MAX_VALUE)
  hp[n - 1] = 1
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      hp[j] = Math.max(1, Math.min(hp[j], hp[j + 1]) - dungeon[i][j])
    }
  }
  return hp[0]
}
