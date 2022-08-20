/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

export function minimumRecolors(blocks, k) {
  let BCount = 0
  for (let i = 0; i < k; i++) {
    BCount += blocks[i] === 'B'
  }
  if (BCount >= k) return 0
  let maxBCount = BCount
  for (let i = k; i < blocks.length; i++) {
    BCount += (blocks[i] === 'B') - (blocks[i - k] === 'B')
    if (BCount >= k) return 0
    maxBCount = Math.max(maxBCount, BCount)
  }
  return k - maxBCount
}
