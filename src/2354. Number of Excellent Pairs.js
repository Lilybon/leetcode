/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function bitCount(n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24
}

export function countExcellentPairs(nums, k) {
  const MAX_BIT_COUNT = 30,
    frequencies = new Array(MAX_BIT_COUNT).fill(0)

  for (let num of [...new Set(nums)]) {
    const count = bitCount(num)
    frequencies[count]++
  }

  let count = 0
  for (let i = 0; i < MAX_BIT_COUNT; i++) {
    for (let j = 0; j < MAX_BIT_COUNT; j++) {
      if (i + j >= k) count += frequencies[i] * frequencies[j]
    }
  }
  return count
}
