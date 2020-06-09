/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSquare = (num) => {
  const sqrt_num = Math.sqrt(num)
  return sqrt_num == parseInt(sqrt_num)
}
