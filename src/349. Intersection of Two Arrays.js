/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

export function intersection(nums1, nums2) {
  const set = new Set(nums1),
    results = []
  for (let num of nums2) {
    if (set.has(num)) {
      results.push(num)
      set.delete(num)
    }
  }
  return results
}
