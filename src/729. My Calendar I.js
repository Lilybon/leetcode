export class MyCalendar {
  constructor() {
    this.calendar = []
  }
  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    for (let [rangeStart, rangeEnd] of this.calendar) {
      if (Math.max(start, rangeStart) < Math.min(end, rangeEnd)) return false
      if (rangeStart < start && end <= rangeEnd) return false
    }
    this.calendar.push([start, end])
    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
