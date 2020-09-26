/**
 * @param {number[][]} points
 * @return {number}
 */

const minAreaRect = (points) => {
  const coord = new Map()
  let globalMin = Infinity
  for (let [x, y] of points) {
    if (!coord.has(x)) coord.set(x, new Set())
    coord.get(x).add(y)
  }
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let [x1, y1] = points[i]
      let [x2, y2] = points[j]
      if (
        x1 !== x2 &&
        y1 !== y2 &&
        coord.get(x1).has(y2) &&
        coord.get(x2).has(y1)
      ) {
        let localMin = Math.abs((x1 - x2) * (y1 - y2))
        globalMin = Math.min(globalMin, localMin)
      }
    }
  }
  return globalMin === Infinity ? 0 : globalMin
}
