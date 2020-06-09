/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = (nums) => {
  if (nums.length > 1) {
    let slow = nums[0]
    let fast = nums[slow]
    while (slow !== fast) {
      slow = nums[slow]
      fast = nums[nums[fast]]
    }
    fast = 0
    while (slow !== fast) {
      slow = nums[slow]
      fast = nums[fast]
    }
    return fast
  }
  return -1
}
