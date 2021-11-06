/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
export function twoSum (nums, target) {
  for (var i = 0; i < nums.length; i ++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
}
*/

export function twoSum(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    if (map[target - v] >= 0) {
      // 從 map 中找到符合條件且可對應的數字和其位置
      return [map[target - v], i]
    } else {
      // 用 map 記憶目前數字(key = v)的位置(value = i)
      map[v] = i
    }
  }
}
