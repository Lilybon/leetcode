/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

export function numJewelsInStones(jewels, stones) {
  const set = new Set()
  for (let jewel of jewels) {
    set.add(jewel)
  }

  let count = 0
  for (let stone of stones) {
    if (set.has(stone)) count++
  }
  return count
}
