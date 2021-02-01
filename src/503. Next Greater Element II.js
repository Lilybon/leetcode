/**
 * @param {number[]} nums
 * @return {number[]}
 */

export function nextGreaterElements(nums) {
  const stack = [],
    n = nums.length,
    results = Array(n).fill(-1)
  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      results[stack.pop()] = nums[i % n]
    }
    if (i < n) stack.push(i)
  }
  return results
}
