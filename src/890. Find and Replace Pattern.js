/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

export function findAndReplacePattern(words, pattern) {
  return words.filter((word) => isReplacePattern(word, pattern))
}

function isReplacePattern(word, pattern) {
  const n = word.length,
    p2q = new Map(),
    q2p = new Map()
  for (let i = 0; i < n; i++) {
    const p = word[i],
      q = pattern[i]
    if (!p2q.has(p) && !q2p.has(q)) {
      p2q.set(p, q)
      q2p.set(q, p)
    } else if (p2q.get(p) !== q || q2p.get(q) !== p) return false
  }
  return true
}
