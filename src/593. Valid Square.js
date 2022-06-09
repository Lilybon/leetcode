/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

export function validSquare(p1, p2, p3, p4) {
  const distance2Flag = new Map(),
    points = [p1, p2, p3, p4]
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance =
        (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
      if (distance === 0) return false
      distance2Flag.set(distance, true)
    }
  }
  return distance2Flag.size === 2
}
