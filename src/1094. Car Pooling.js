/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

export function carPooling(trips, capacity) {
  let MAX_STOP = 1000
  let stops = Array(MAX_STOP).fill(0)
  for (let i = 0; i < trips.length; i++) {
    stops[trips[i][1]] += trips[i][0]
    stops[trips[i][2]] -= trips[i][0]
  }
  for (let i = 1; i < MAX_STOP; i++) {
    stops[i] += stops[i - 1]
    if (stops[i] > capacity) return false
  }
  return true
}
