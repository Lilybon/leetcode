/**
 * @param {number[]} fruits
 * @return {number}
 */

export function totalFruit(fruits) {
  const counts = new Map()
  let max = 0,
    left = 0
  for (let right = 0; right < fruits.length; right++) {
    counts.set(fruits[right], (counts.get(fruits[right]) || 0) + 1)
    while (counts.size > 2) {
      counts.set(fruits[left], counts.get(fruits[left]) - 1)
      if (counts.get(fruits[left]) === 0) counts.delete(fruits[left])
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}
