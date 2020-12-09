/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

export function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const results = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let latest = results[results.length - 1]
    let current = intervals[i]
    if (latest[0] <= current[0] && current[0] <= latest[1]) {
      latest[0] = Math.min(current[0], latest[0])
      latest[1] = Math.max(current[1], latest[1])
    } else {
      results.push(current)
    }
  }
  return results
}
