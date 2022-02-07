/**
 * @param {number} num
 * @return {number}
 */

export function addDigits(num) {
  let digits = num
  while (digits >= 10) {
    let arr = digits.toString().split('')
    digits = 0
    arr.forEach((el) => {
      digits += parseInt(el)
    })
  }
  return digits
}
