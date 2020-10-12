/**
 * @param {number[]} nums
 * @return {number[]}
 */

function findDuplicates(nums) {
  let hash = {}
  let duplicates = []
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i]
    if (!hash[char]) hash[char] = 1
    else duplicates.push(char)
  }
  return duplicates
}
