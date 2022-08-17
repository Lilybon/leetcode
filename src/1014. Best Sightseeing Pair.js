/**
 * @param {number[]} values
 * @return {number}
 */

// function maxScoreSightseeingPair(values) {
//   const n = values.length,
//     maxScores = Array(n).fill(0),
//     maxPicks = Array(n).fill(0)
//   maxPicks[0] = values[0]
//   for (let i = 1; i < n; i++) {
//     maxPicks[i] = Math.max(maxPicks[i - 1], values[i] + i)
//     maxScores[i] = Math.max(maxScores[i - 1], maxPicks[i - 1] + values[i] - i)
//   }
//   return maxScores[n - 1]
// }

export function maxScoreSightseeingPair(values) {
  const n = values.length
  let maxScore = 0,
    pick = values[0]
  for (let i = 1; i < n; i++) {
    const prePick = pick
    pick = Math.max(pick, values[i] + i)
    maxScore = Math.max(maxScore, prePick + values[i] - i)
  }
  return maxScore
}
