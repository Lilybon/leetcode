/**
 * @param {string[]} strs
 * @return {string[][]}
 */

export function groupAnagrams(strs) {
  const dict = new Map()
  strs.forEach((str) => {
    const counts = Array(26).fill(0)
    for (let c of str) {
      counts[c.charCodeAt(0) - 97]++
    }
    const key = counts.join('#')
    if (!dict.get(key)) dict.set(key, [])
    dict.get(key).push(str)
  })
  return [...dict.values()]
}
