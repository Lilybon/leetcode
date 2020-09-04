/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }
  let localMax = 0
  for (let i = 0; i < k; i++) vowel[s[i]] && localMax++
  let globalMax = localMax
  for (let i = k; i < s.length; i++) {
    vowel[s[i - k]] && localMax--
    vowel[s[i]] && localMax++
    globalMax = Math.max(localMax, globalMax)
  }
  return globalMax
}
