export class MyCalendarTwo {
  constructor() {
    this.calendar = []
    this.overlaps = []
  }
  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    for (let [rangeStart, rangeEnd] of this.overlaps) {
      if (start < rangeEnd && rangeStart < end) return false
    }
    for (let [rangeStart, rangeEnd] of this.calendar) {
      if (start < rangeEnd && rangeStart < end)
        this.overlaps.push([
          Math.max(start, rangeStart),
          Math.min(end, rangeEnd),
        ])
    }
    this.calendar.push([start, end])
    return true
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
