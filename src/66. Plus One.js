/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0
    else {
      digits[i] += 1
      break
    }
  }
  if (digits[0] === 0) digits.unshift(1)
  return digits
}
