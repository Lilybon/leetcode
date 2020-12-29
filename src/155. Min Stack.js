export class MinStack {
  /**
   * initialize your data structure here.
   */
  constructor() {
    this.valS = []
    this.minS = []
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (!this.minS.length || x <= this.getMin()) this.minS.push(x)
    this.valS.push(x)
  }
  /**
   * @return {void}
   */
  pop() {
    if (this.top() === this.getMin()) this.minS.pop()
    this.valS.pop()
  }
  /**
   * @return {number}
   */
  top() {
    return this.valS[this.valS.length - 1]
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.minS[this.minS.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
