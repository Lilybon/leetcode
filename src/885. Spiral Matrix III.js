/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

export function spiralMatrixIII(rows, cols, rStart, cStart) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const results = []
  let steps = 1
  results.push([rStart, cStart])
  while (rows * cols > results.length) {
    for (let i = 0; i < directions.length; i++) {
      const [vr, vc] = directions[i]
      for (let j = 0; j < steps; j++) {
        rStart += vr
        cStart += vc
        if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
          results.push([rStart, cStart])
          if (results.length >= rows * cols) return results
        }
      }
      if (i % 2) steps++
    }
  }
  return results
}
