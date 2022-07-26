/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

export function findWinners(matches) {
  const lossTimes = new Map()
  for (let [winner, loser] of matches) {
    lossTimes.set(winner, lossTimes.get(winner) ?? 0)
    lossTimes.set(loser, (lossTimes.get(loser) ?? 0) + 1)
  }
  const results = [[], []]
  for (let [player, lossTime] of lossTimes) {
    if (lossTime === 0) results[0].push(player)
    else if (lossTime === 1) results[1].push(player)
  }
  results[0].sort((a, b) => a - b)
  results[1].sort((a, b) => a - b)
  return results
}
