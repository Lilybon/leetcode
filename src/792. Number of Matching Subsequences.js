/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
export function numMatchingSubseq(s, words) {
  const n = s.length,
    pass = new Set(),
    out = new Set()
  let count = 0

  for (let word of words) {
    if (pass.has(word) || out.has(word)) {
      if (pass.has(word)) count++
      continue
    }
    const m = word.length
    let i = 0,
      j = 0.0
    while (i < n && j < m) {
      if (word[j] === s[i]) j++
      i++
    }
    if (j === m) {
      count++
      pass.add(word)
    } else {
      out.add(word)
    }
  }

  return count
}
