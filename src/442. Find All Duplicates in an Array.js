/**
 * @param {number[]} nums
 * @return {number[]}
 */

export function findDuplicates(nums) {
  const hash = {},
    duplicates = []
  for (let char of nums) {
    if (!hash[char]) hash[char] = true
    else duplicates.push(char)
  }
  return duplicates
}
