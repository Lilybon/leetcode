/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

export function insert(intervals, newInterval) {
  let result = [],
    insertIdx = 0,
    inserted = [...newInterval]
  for (let interval of intervals) {
    if (interval[1] < newInterval[0]) {
      result.push(interval)
      insertIdx++
    } else if (interval[0] > newInterval[1]) {
      result.push(interval)
    } else {
      inserted[0] = Math.min(inserted[0], interval[0])
      inserted[1] = Math.max(inserted[1], interval[1])
    }
  }
  result.splice(insertIdx, -1, inserted)
  return result
}
