/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

export function countPoints(points, queries) {
  return queries.map(([cx, cy, cr]) =>
    points.reduce((sum, [px, py]) => sum + inRange(cx - px, cy - py, cr), 0),
  )
}

function inRange(x, y, z) {
  return x ** 2 + y ** 2 <= z ** 2
}
