/**
 * @param {number[]} score
 * @return {string[]}
 */

export function findRelativeRanks(score) {
  const sortedScore = [...score]
  sortedScore.sort((a, b) => b - a)

  const point2SortedIndex = sortedScore.reduce((map, point, index) => {
    map.set(point, index)
    return map
  }, new Map())

  const results = score.map((point) => {
    const sortedIndex = point2SortedIndex.get(point)
    switch (sortedIndex) {
      case 0:
        return 'Gold Medal'
      case 1:
        return 'Silver Medal'
      case 2:
        return 'Bronze Medal'
      default:
        return (sortedIndex + 1).toString()
    }
  })
  return results
}
