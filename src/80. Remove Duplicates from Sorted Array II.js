/**
 * @param {number[]} nums
 * @return {number}
 */

/*
const removeDuplicates = nums => {
  let i = 0,
      j = 0,
      testee,
      times
  while (j < nums.length) {
    if (nums[j] !== testee) {
      testee = nums[j]
      times = 0
    }
    nums[i] = testee
    times++
    if (times === 3) {
      while (nums[j] === testee && j < nums.length) j++
    } else {
      i++
      j++
    }
  }
  return i
}
 */

const removeDuplicates = (nums) => {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== nums[right + 2]) nums[left++] = nums[right]
  }
  return left
}
