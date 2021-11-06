/**
 * @param {string[]} strs
 * @return {string[][]}
 */

export function groupAnagrams(strs) {
  const dict = new Map()
  strs.forEach((str) => {
    const key = str.split('').sort().join()
    if (!dict.get(key)) dict.set(key, [])
    dict.set(key, [...dict.get(key), str])
  })
  return [...dict.values()]
}
