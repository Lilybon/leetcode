class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums
    this.defaultNums = [...nums]
  }
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    this.nums = [...this.defaultNums]
    return this.nums
  }
  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    for (let i = 0; i < this.nums.length; i++) {
      let j = Math.floor(Math.random() * this.nums.length)
      let tmp = this.nums[j]
      this.nums[j] = this.nums[i]
      this.nums[i] = tmp
    }
    return this.nums
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
