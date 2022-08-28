/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

export function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b)
  const results = []
  for (let query of queries) {
    let i = 0
    while (i < nums.length && query >= nums[i]) {
      query -= nums[i]
      i++
    }
    results.push(i)
  }
  return results
}
