/**
 * @param {number[]} A
 */

export class RLEIterator {
  constructor(A) {
    this.A = A
    this.index = 0
    this.count = this.A[this.index]
  }
  /**
   * @param {number} n
   * @return {number}
   */
  next(n) {
    while (n > 0 && this.A.length > this.index) {
      if (n > this.count) {
        n -= this.count
        this.index += 2
        this.count = this.A[this.index]
      } else {
        this.count -= n
        n = 0
      }
    }
    return this.index >= this.A.length ? -1 : this.A[this.index + 1]
  }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */
