/**
 * @param {number[]} nums
 * @return {string}
 */

export function largestNumber(nums) {
  const largest = nums
    .sort((a, b) => {
      let str1 = '' + a + b,
        str2 = '' + b + a
      return str2 - str1
    })
    .join('')
  return largest === '0' ? '0' : largest
}
