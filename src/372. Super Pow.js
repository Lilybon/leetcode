/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */

// a ** (x + y) = (a ** x) * (a ** y)
// a ** (x * y) = (a ** x) ** y

const mod = 1337

export function superPow(a, b) {
  let result = 1
  for (let digit of b) {
    let product = 1
    for (let i = 1; i <= 10; i++) {
      product = (product * result) % mod
    }
    for (let i = 1; i <= digit; i++) {
      product = (product * a) % mod
    }
    result = product
  }
  return result
}

// Recursive
// function superPow (a, b) {
//   let result = 1
//   for (let digit of b) {
//     result = pow(result, 10) * pow(a, digit) % mod
//   }
//   return result
// }

// function pow (x, n) {
//   if (x === 1 || n === 0) return 1
//   if (n === 1) return x % mod
//   return pow(x % mod, Math.floor(n / 2)) *
//     pow(x % mod, Math.ceil(n / 2)) %
//     mod
// }
