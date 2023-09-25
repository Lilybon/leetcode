/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
export function findTheDifference(s, t) {
  let code = 0
  for (let c of s + t) {
    code ^= c.charCodeAt(0)
  }
  return String.fromCharCode(code)
}
