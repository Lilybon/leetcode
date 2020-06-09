/**
 * @param {number} num
 * @return {number}
 */

const addDigits = (num) => {
  if (num < 10) return num
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
