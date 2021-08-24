/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export function numberOfSubarrays(nums, k) {
  // set start = -1 and end = n to make range difference smoothly
  const n = nums.length,
    oddIndice = [-1]
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2) oddIndice.push(i)
  }
  oddIndice.push(n)

  let result = 0
  for (let i = 0; i <= oddIndice.length - k - 2; i++) {
    result +=
      (oddIndice[i + 1] - oddIndice[i]) *
      (oddIndice[i + k + 1] - oddIndice[i + k])
  }
  return result
}
