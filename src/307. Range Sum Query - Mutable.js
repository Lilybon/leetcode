export class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = Array(nums.length).fill(0)
    this.sums = Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
      this.update(i, nums[i])
    }
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  update(index, val) {
    const delta = val - this.nums[index]
    for (let i = index + 1; i < this.sums.length; i += this.lowbit(i)) {
      this.sums[i] += delta
    }
    this.nums[index] = val
  }
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    return this.getSum(right + 1) - this.getSum(left)
  }
  getSum(index) {
    let sum = 0
    for (let i = index; i > 0; i -= this.lowbit(i)) {
      sum += this.sums[i]
    }
    return sum
  }
  lowbit(x) {
    return x & -x
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
