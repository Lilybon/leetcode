/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  const INT_MAX = Math.pow(2, 31) - 1
  if (0 <= x && x < 10) return x

  const str = x.toString()

  let rStr = str.split('').reverse().join('')

  if (rStr.indexOf('-') > -1) {
    rStr = '-' + rStr.replace('-', '')
  }

  let result = parseInt(rStr)

  if (result > INT_MAX || result < -(INT_MAX + 1)) return 0
  return result
}
