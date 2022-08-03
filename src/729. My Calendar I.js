// Bruto Force
// class MyCalendar {
//   constructor() {
//     this.calendar = []
//   }
//   /**
//    * @param {number} start
//    * @param {number} end
//    * @return {boolean}
//    */
//   book(start, end) {
//     for (let [rangeStart, rangeEnd] of this.calendar) {
//       if (start < rangeEnd && rangeStart < end) return false
//     }
//     this.calendar.push([start, end])
//     return true
//   }
// }

class Node {
  constructor(start, end) {
    this.left = null
    this.right = null
    this.start = start
    this.end = end
  }
}

export class MyCalendar {
  constructor() {
    this.root = null
  }
  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    if (!this.root) {
      this.root = new Node(start, end)
      return true
    }
    return this.insert(start, end, this.root)
  }
  insert(start, end, node) {
    if (node.end <= start) {
      if (node.right) return this.insert(start, end, node.right)
      node.right = new Node(start, end)
      return true
    }
    if (node.start >= end) {
      if (node.left) return this.insert(start, end, node.left)
      node.left = new Node(start, end)
      return true
    }
    return false
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
