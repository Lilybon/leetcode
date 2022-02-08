/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

export function wordSubsets(words1, words2) {
  const count2 = new Uint8Array(26),
    results = []

  for (let word of words2) {
    const tmpCount = createCharCount(word)
    for (let i = 0; i < 26; i++) {
      count2[i] = Math.max(tmpCount[i], count2[i])
    }
  }

  for (let word of words1) {
    const count1 = createCharCount(word)
    let isValid = true
    for (let i = 0; i < 26; i++) {
      if (count2[i] > count1[i]) {
        isValid = false
        break
      }
    }
    if (isValid) results.push(word)
  }

  return results
}

function createCharCount(word) {
  const count = new Uint8Array(26)
  for (let char of word) {
    count[char.charCodeAt(0) - 97] += 1
  }
  return count
}
