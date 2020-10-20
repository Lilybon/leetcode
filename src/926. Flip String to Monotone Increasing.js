/**
 * @param {string} S
 * @return {number}
 */

export function minFlipsMonoIncr(S) {
  let flip0 = 0,
    flip1 = 0
  for (let char of S) {
    if (char === '0') flip1 = Math.min(flip1 + 1, flip0)
    else flip0 += 1
  }
  return Math.min(flip0, flip1)
}
