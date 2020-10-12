/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums) {
  let arr = []
  const major = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    let v = nums[i]
    if (!arr[v]) arr[v] = 0
    arr[v] += 1
    if (arr[v] >= major) return v
  }
}
