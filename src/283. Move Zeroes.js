/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

export function moveZeroes(nums) {
  // copy non-zero value from left side of nums, and get the start index to set zero to right side.
  let current = 0
  for (let num of nums) {
    if (num !== 0) nums[current++] = num
  }
  for (let i = current; i < nums.length; i++) {
    nums[i] = 0
  }
}

// function moveZeroes (nums) {
//   // keep pointer j finds the next non-zero value and swap with pointer i step-by-step
//   let i = 0,
//       j = 0
//   while (j < nums.length) {
//     if (nums[j] === 0) j++
//     else {
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       i++
//       j++
//     }
//   }
// }
