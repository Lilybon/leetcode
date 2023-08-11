/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
