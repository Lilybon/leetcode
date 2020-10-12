/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
  const freq = nums.reduce((acc, val) => {
    acc.set(val, acc.get(val) ? acc.get(val) + 1 : 1)
    return acc
  }, new Map())

  return Array.from(freq)
    .sort((a, b) => b[1] - a[1])
    .map((pair) => pair[0])
    .slice(0, k)
}
