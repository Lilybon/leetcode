/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */

// function mirrorReflection(p, q) {
//   while (p % 2 === 0 && q % 2 === 0) {
//     p /= 2
//     q /= 2
//   }
//   return 1 - (p % 2) + (q % 2)
// }

export function mirrorReflection(p, q) {
  const divisor = gcd(p, q)
  return 1 - ((p / divisor) % 2) + ((q / divisor) % 2)
}

function gcd(p, q) {
  return q ? gcd(q, p % q) : p
}
