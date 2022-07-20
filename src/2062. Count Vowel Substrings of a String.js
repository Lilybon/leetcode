/**
 * @param {string} word
 * @return {number}
 */

export function countVowelSubstrings(word) {
  const n = word.length,
    vowels = 'aeiou'
  let count = 0

  for (let i = 0; i < n; i++) {
    const set = new Set()
    for (let j = i; j < n; j++) {
      if (!vowels.includes(word[j])) break
      set.add(word[j])
      if (set.size == vowels.length) count++
    }
  }
  return count
}
