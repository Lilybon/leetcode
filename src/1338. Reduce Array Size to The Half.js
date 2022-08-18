/**
 * @param {number[]} arr
 * @return {number}
 */

export function minSetSize(arr) {
  const n = arr.length,
    map = new Map()
  for (let value of arr) {
    map.set(value, (map.get(value) ?? 0) + 1)
  }
  const counts = [...map.values()].sort((a, b) => b - a)
  for (let i = 0, count = 0; i < counts.length; i++) {
    count += counts[i]
    if (count >= n / 2) return i + 1
  }
  return counts.length
}
