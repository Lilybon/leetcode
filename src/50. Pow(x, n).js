/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/*
function myPow (x, n) {
  return x ** n
}

function myPow (x, n) {
  if (n < 0) {
      x = 1 / x
      n = -n
  }
  let res = 1
  while (n) {
      if (n % 2 === 1) {
          res *= x
          --n
      }
      x *= x
      n /= 2
  }
  return res
}
 */

function myPow(x, n) {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x, n - 1)
}
