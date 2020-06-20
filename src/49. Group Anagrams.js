/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  let dict = new Map()
  strs.forEach((str) => {
    const key = str.split('').sort().join()
    if (!dict.get(key)) dict.set(key, [])
    dict.set(key, [...dict.get(key), str])
  })
  return [...dict.values()]
}
