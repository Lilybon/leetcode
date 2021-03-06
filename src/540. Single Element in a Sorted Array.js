/**
 * @param {number[]} nums
 * @return {number}
 */

export function singleNonDuplicate(nums) {
  // because of it is 'sorted' array, we don't need to xor all the array.
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
}

/*
export function singleNonDuplicate (nums) {
  let result = 0
  for(let i = 0; i < nums.length; i ++){
    result ^= nums[i]
  }
  return result
}
*/
