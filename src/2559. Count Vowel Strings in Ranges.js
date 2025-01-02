/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings(words, queries) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  let sum = 0
  const prefixSum = []
  for (let word of words) {
    sum += !!(
      vowels.includes(word[0]) && vowels.includes(word[word.length - 1])
    )
    prefixSum.push(sum)
  }

  const ans = []
  for (let [start, end] of queries) {
    ans.push(prefixSum[end] - (start === 0 ? 0 : prefixSum[start - 1]))
  }
  return ans
}
