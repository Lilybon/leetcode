// Array
export class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.index = 0
    this.history = [homepage]
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.history.splice(this.index + 1)
    this.history.push(url)
    this.index++
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.index = Math.max(0, this.index - steps)
    return this.current
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.index = Math.min(this.history.length - 1, this.index + steps)
    return this.current
  }

  get current() {
    return this.history[this.index]
  }
}

// Two stack
// class BrowserHistory {
//   /**
//    * @param {string} homepage
//    */
//   constructor (homepage) {
//     this.backs = []
//     this.current = homepage
//     this.forwards = []
//   }

//   /**
//    * @param {string} url
//    * @return {void}
//    */
//   visit (url) {
//     this.backs.push(this.current)
//     this.current = url
//     this.forwards = []
//   }

//   /**
//    * @param {number} steps
//    * @return {string}
//    */
//   back (steps) {
//     steps = Math.min(steps, this.backs.length)
//     while (steps) {
//       this.forwards.push(this.current)
//       this.current = this.backs.pop()
//       steps--
//     }
//     return this.current
//   }

//   /**
//    * @param {number} steps
//    * @return {string}
//    */
//   forward (steps) {
//     steps = Math.min(steps, this.forwards.length)
//     while (steps) {
//       this.backs.push(this.current)
//       this.current = this.forwards.pop()
//       steps--
//     }
//     return this.current
//   }
// }

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
