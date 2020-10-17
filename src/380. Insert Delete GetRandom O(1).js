export class RandomizedSet {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.map = new Map()
    this.keys = new Array()
  }
  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) return false
    this.keys.push(val)
    this.map.set(val, this.keys.length - 1)
    return true
  }
  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.map.has(val)) return false
    const idx = this.map.get(val)
    const last = this.keys[this.keys.length - 1]
    this.keys[idx] = last
    this.map.set(last, idx)
    this.map.delete(val)
    this.keys.pop()
    return true
  }
  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    const idx = Math.floor(Math.random() * this.keys.length)
    return this.keys[idx]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
