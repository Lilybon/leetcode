/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedIterator {
  /**
   * @constructor
   * @param {NestedInteger[]} nestedList
   */
  constructor(nestedList) {
    this.queue = []
    this.index = 0
    const _collectFlatten = (nests) => {
      if (!nests) return
      for (let nest of nests) {
        if (nest.isInteger()) this.queue.push(nest.getInteger())
        else _collectFlatten(nest.getList())
      }
    }
    _collectFlatten(nestedList)
  }
  /**
   * @this NestedIterator
   * @returns {boolean}
   */
  hasNext() {
    return this.queue.length
  }
  /**
   * @this NestedIterator
   * @returns {integer}
   */
  next() {
    return this.queue.shift()
  }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
