/**
 * @param {number[]} rating
 * @return {number}
 */

// Brute Force
/*
export function numTeams (rating) {
  let count = 0
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if (rating[i] < rating[j] && rating[j] < rating[k] ||
           rating[i] > rating[j] && rating[j] > rating[k]) count++
      }
    }
  }
  return count
}
 */

export function numTeams(rating) {
  const n = rating.length
  let count = 0
  for (let j = 0; j < n; j++) {
    let left = 0
    let right = 0
    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) left++
    }
    for (let k = j + 1; k < n; k++) {
      if (rating[j] < rating[k]) right++
    }
    count += left * right + (j - left) * (n - j - right - 1)
  }
  return count
}
