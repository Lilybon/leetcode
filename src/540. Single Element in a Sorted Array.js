/**
 * @param {number[]} nums
 * @return {number}
 */

export function singleNonDuplicate(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2),
      // compare = mid % 2 == 0 ? mid + 1 : mid - 1
      compare = mid ^ 1
    if (nums[mid] == nums[compare]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return nums[left]
}

/*
export function singleNonDuplicate(nums) {
  // because of it is 'sorted' array, we don't need to xor all the array.
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
}
 */

/*
export function singleNonDuplicate (nums) {
  let result = 0
  for(let i = 0; i < nums.length; i ++){
    result ^= nums[i]
  }
  return result
}
*/
