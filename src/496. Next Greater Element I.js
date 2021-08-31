/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

export function nextGreaterElement(nums1, nums2) {
  const results = [],
    stack = [],
    map = {}
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length && num > stack[stack.length - 1]) {
      stack.pop()
    }
    map[num] = stack.length ? stack[stack.length - 1] : -1
    stack.push(num)
  }
  for (let num of nums1) {
    results.push(map[num])
  }
  return results
}
