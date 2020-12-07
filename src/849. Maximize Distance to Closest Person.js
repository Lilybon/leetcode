/**
 * @param {number[]} seats
 * @return {number}
 */

/*
export function maxDistToClosest (seats) {
  const occupied = [],
        n = seats.length
  for (let i = 0; i < n; i++) {
    if (seats[i]) occupied.push(i)
  }
  let max = occupied[0]
  for (let i = 1; i < occupied.length; i++) {
    let tmpMax = Math.floor((occupied[i] - occupied[i - 1]) / 2)
    max = Math.max(max, tmpMax)
  }
  max = Math.max(max, Math.floor(n - 1 - occupied[occupied.length - 1]))
  return max
}
 */

export function maxDistToClosest(seats) {
  const n = seats.length
  let max = 0,
    start = 0
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      let tmpMax = start === 0 ? i : Math.floor((i - start + 1) / 2)
      max = Math.max(max, tmpMax)
      start = i + 1
    }
  }
  max = Math.max(max, n - start)
  return max
}
