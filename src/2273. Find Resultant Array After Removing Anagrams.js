import { isAnagram } from './242. Valid Anagram'

/**
 * @param {string[]} words
 * @return {string[]}
 */

export function removeAnagrams(words) {
  const n = words.length,
    anagrams = []

  let i = 0
  while (i < n) {
    let j = i + 1
    while (j < n && isAnagram(words[i], words[j])) j++
    anagrams.push(words[i])
    i = j
  }

  return anagrams
}
