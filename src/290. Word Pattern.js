/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/*
function wordPattern (pattern, s) {
  let wordList = s.split(' ')
  const n = pattern.length
  if (n !==  wordList.length) return false
  const ptw = Array(26)
  for (let i = 0; i < n; i++) {
    let p = pattern[i]
    let w = wordList[i]
    let j = p.charCodeAt(0) - 97
    if (!ptw[j]) {
      if (ptw.includes(w)) return false
      ptw[j] = w
    }
    if (ptw[j] !== w) return false
  }
  return true
}
 */

function wordPattern(pattern, s) {
  let wordList = s.split(' ')
  const n = pattern.length
  if (n !== wordList.length) return false
  const ptw = new Map()
  const wtp = new Map()
  for (let i = 0; i < n; i++) {
    let p = pattern[i]
    let w = wordList[i]
    if (!ptw.has(p) && !wtp.get(w)) {
      ptw.set(p, w)
      wtp.set(w, p)
    }
    if (ptw.get(p) !== w || wtp.get(w) !== p) return false
  }
  return true
}
