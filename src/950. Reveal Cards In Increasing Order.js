/**
 * @param {number[]} deck
 * @return {number[]}
 */

function deckRevealedIncreasing(deck) {
  const n = deck.length,
    result = new Uint32Array(n),
    queue = Array.from(Array(n), (_, idx) => n - 1 - idx)
  deck.sort((a, b) => a - b)
  for (let val of deck) {
    let front = queue.pop()
    result[front] = val
    let next = queue.pop()
    queue.unshift(next)
  }
  return result
}
