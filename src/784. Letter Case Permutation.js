/**
 * @param {string} S
 * @return {string[]}
 */

export function letterCasePermutation(S) {
  const results = []
  let P = ''
  collect()
  return results
  function collect(idx = 0) {
    if (P.length === S.length) {
      results.push(P)
      return
    }
    let LC = S[idx].toLowerCase(),
      UC = S[idx].toUpperCase(),
      backP = P
    if (LC === UC) {
      P += S[idx]
      collect(idx + 1)
      P = backP
    } else {
      P += LC
      collect(idx + 1)
      P = backP
      P += UC
      collect(idx + 1)
      P = backP
    }
  }
}
