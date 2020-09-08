/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 1. Brute Force
/*
const findAnagrams = (s, p) => {
  const result = []
  const dict = p.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1
    return acc
  }, {})
  for (let i = 0; i <= s.length - p.length; i++) {
    let test = { ...dict }
    let valid = true
    for (let j = i; j < i + p.length; j++) {
      if (!test[s[j]]) {
        valid = false
        break
      }
      test[s[j]]--
    }
    if (valid) result.push(i)
  }
  return result
}
 */

// 2. Sliding Window
const findAnagrams = (s, p) => {
  const results = []
  let dict = {}
  let uniqueChars = 0
  for (let char of p) {
    if (dict[char]) dict[char]++
    else {
      uniqueChars++
      dict[char] = 1
    }
  }
  let left = 0
  for (let right = 0; right < s.length; right++) {
    if (dict[s[right]] !== undefined) dict[s[right]]--
    if (dict[s[right]] === 0) uniqueChars--
    if (uniqueChars === 0) results.push(left)
    if (right - left + 1 === p.length) {
      if (dict[s[left]] !== undefined) dict[s[left]]++
      if (dict[s[left++]] === 1) uniqueChars++
    }
  }
  return results
}
