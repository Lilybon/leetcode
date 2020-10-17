/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

export function canConstruct(ransomNote, magazine) {
  let hash = {}
  for (let i = 0; i < magazine.length; i++) {
    let alphabet = magazine[i]
    if (!hash[alphabet]) hash[alphabet] = 1
    else hash[alphabet]++
  }
  for (let j = 0; j < ransomNote.length; j++) {
    let alphabet = ransomNote[j]
    if (hash[alphabet] === 0 || hash[alphabet] === undefined) return false
    else if (hash[alphabet] > 0) hash[alphabet]--
  }
  return true
}
