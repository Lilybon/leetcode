/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
 function merge (nums1, m, nums2, n) {
  for (let i = m, j = 0; i < m + n; i++, j++) nums1[i]= nums2[j]
  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) [nums1[i], nums1[j]] = [nums1[j], nums1[i]]
    }
  }
}
 */

function merge(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let backward = m + n - 1
  while (backward >= 0) {
    if (j < 0 || nums1[i] > nums2[j]) {
      nums1[backward] = nums1[i]
      i--
    } else if (i < 0 || nums1[i] <= nums2[j]) {
      nums1[backward] = nums2[j]
      j--
    }
    backward--
  }
}
