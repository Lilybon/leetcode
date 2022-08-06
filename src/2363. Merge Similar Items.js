/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */

export function mergeSimilarItems(items1, items2) {
  const map = new Map()
  for (let [value, weight] of items1) {
    if (!map.has(value)) map.set(value, 0)
    map.set(value, map.get(value) + weight)
  }
  for (let [value, weight] of items2) {
    if (!map.has(value)) map.set(value, 0)
    map.set(value, map.get(value) + weight)
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0])
}
