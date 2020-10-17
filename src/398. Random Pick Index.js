export class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums
  }
  /**
   * @param {number} target
   * @return {number}
   */
  pick(target) {
    let result = -1
    let count = 0
    for (let idx in this.nums) {
      if (this.nums[idx] === target) {
        count++
        let fit = Math.floor(Math.random() * count)
        if (fit === 0) result = +idx
      }
    }
    return result
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
