export class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.prefixSums = Array(nums.length + 1)
    this.prefixSums[0] = 0
    for (let i = 1; i < this.prefixSums.length; i++) {
      this.prefixSums[i] = this.prefixSums[i - 1] + nums[i - 1]
    }
  }
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    return this.prefixSums[right + 1] - this.prefixSums[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
