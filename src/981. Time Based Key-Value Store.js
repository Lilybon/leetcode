/**
 * Initialize your data structure here.
 */
export class TimeMap {
  constructor() {
    this.map = {}
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (!this.map[key]) this.map[key] = []
    this.map[key].push({ timestamp, value })
  }
  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    if (!this.map[key]) return ''
    return this.search(this.map[key], timestamp)
  }
  search(list, target) {
    let left = 0,
      right = list.length - 1
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (
        list[mid].timestamp === target ||
        (list[mid].timestamp < target && list[mid + 1].timestamp > target)
      )
        return list[mid].value
      else if (
        list[mid].timestamp < target &&
        list[mid + 1].timestamp <= target
      )
        left = mid + 1
      else right = mid - 1
    }
    return list[left].timestamp <= target ? list[left].value : ''
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
