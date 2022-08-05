/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Sort + DP
// function combinationSum4(nums, target) {
//   nums.sort((a, b) => a - b)
//   const dp = Array(target + 1).fill(0)
//   dp[0] = 1
//   for (let i = 1; i <= target; i++) {
//     for (let num of nums) {
//       if (i < num) break
//       dp[i] += dp[i - num]
//     }
//   }
//   return dp[dp.length - 1]
// }

// Memo DP
export function combinationSum4(nums, target) {
  const memo = new Map()
  return helper(target)
  function helper(target) {
    if (target < 0) return 0
    if (target === 0) return 1
    if (memo.has(target)) return memo.get(target)
    let count = 0
    for (let num of nums) {
      count += helper(target - num)
    }
    memo.set(target, count)
    return memo.get(target)
  }
}
