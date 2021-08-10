class Solution {
  /**
   * @param {number[]} w
   */
  constructor(w) {
    const ranges = [...w]
    for (let i = 1; i < w.length; i++) {
      ranges[i] = ranges[i - 1] + w[i]
    }
    this.ranges = ranges
    this.total = ranges[ranges.length - 1]
  }

  /**
   * @return {number}
   */
  pickIndex() {
    let value = Math.random() * this.total,
      left = 0,
      right = this.ranges.length - 1
    while (true) {
      if (left === right) return left
      const mid = Math.floor((left + right) / 2)
      if (value < this.ranges[mid]) right = mid
      else left = mid + 1
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

// var obj = new Solution([1, 3])
// for (let i = 0; i < 10; i++) {
//   console.log(obj.pickIndex())
// }
