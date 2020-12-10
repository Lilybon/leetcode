/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

export function findTheDistanceValue(arr1, arr2, d) {
  return arr1.reduce(
    (count, num1) => count + !arr2.some((num2) => Math.abs(num1 - num2) <= d),
    0
  )
}
