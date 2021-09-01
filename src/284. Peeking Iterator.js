/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

class PeekingIterator {
  /**
   * @param {Iterator} iterator
   */
  constructor(iterator) {
    this.iterator = iterator
    this.peekedElement = null
  }

  /**
   * @return {number}
   */
  peek() {
    if (!this.hasPeeked) {
      this.peekedElement = this.iterator.next()
    }
    return this.peekedElement
  }

  /**
   * @return {number}
   */
  next() {
    if (!this.hasPeeked) {
      return this.iterator.next()
    }
    const result = this.peekedElement
    this.peekedElement = null
    return result
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    // Case that peek element is cached first is also considered
    return this.hasPeeked || this.iterator.hasNext()
  }

  get hasPeeked() {
    return this.peekedElement !== null
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
