/**
 * @param {number[][]} triangle
 * @return {number}
 */

export function minimumTotal(triangle) {
  const min = triangle[triangle.length - 1]
  for (let i = triangle.length - 2; i >= 0; i--) {
    const cur = triangle[i]
    for (let j = 0; j < cur.length; j++) {
      min[j] = Math.min(min[j + 1], min[j]) + cur[j]
    }
  }
  return min[0]
}
