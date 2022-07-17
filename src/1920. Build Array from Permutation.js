/**
 * @param {number[]} nums
 * @return {number[]}
 */

export function buildArray(nums) {
  return nums.map((value, index, self) => self[value])
}
