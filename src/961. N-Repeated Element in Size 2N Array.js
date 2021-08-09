/**
 * @param {number[]} nums
 * @return {number}
 */

export function repeatedNTimes(nums) {
  const map = {}
  for (let num of nums) {
    if (map[num]) return num
    map[num] = true
  }
}
