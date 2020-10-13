/**
 * @param {number[]} nums
 * @return {boolean}
 */

// DP Bottom-up
/*
export function canJump (nums) {
  const n = nums.length
  let memo = new Array(n).fill(false)
  memo[n - 1] = true
  for (let i = n - 2; i >= 0; i--) {
    let furtherJump = Math.min(i + nums[i], n - 1)
    for (let j = i + 1; j <= furtherJump; j++) {
      if (memo[j] === true) {
        memo[i] = true
        break
      }
    }
  }
  return memo[0] === true
}
 */

// Greedy
export function canJump(nums) {
  let lastPos = nums.length - 1
  for (let i = lastPos; i >= 0; i--) {
    if (i + nums[i] >= lastPos) lastPos = i
  }
  return lastPos === 0
}
