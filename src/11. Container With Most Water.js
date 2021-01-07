/**
 * @param {number[]} height
 * @return {number}
 */

export function maxArea(height) {
  let max = 0,
    left = 0,
    right = height.length - 1
  while (left < right) {
    let tmpMax = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, tmpMax)
    if (height[left] > height[right]) right--
    else left++
  }
  return max
}
