/**
 * @param {number[]} nums
 * @return {number}
 */
export function numIdenticalPairs(nums) {
  const counts = Array(101).fill(0)
  for (let v of nums) {
    counts[v]++
  }

  let pair = 0
  for (let count of counts) {
    pair += (count * (count - 1)) / 2
  }
  return pair
}
