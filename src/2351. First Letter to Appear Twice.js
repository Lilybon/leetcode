/**
 * @param {string} s
 * @return {character}
 */

export function repeatedCharacter(s) {
  const set = new Set()
  for (let char of s) {
    if (set.has(char)) return char
    set.add(char)
  }
}
