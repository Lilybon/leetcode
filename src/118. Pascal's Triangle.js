/**
 * @param {number} numRows
 * @return {number[][]}
 */

export function generate(numRows) {
  const triangle = []
  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1)
    triangle.push(row)
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    }
  }
  return triangle
}
