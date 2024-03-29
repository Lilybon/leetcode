/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

export function sortColors(n) {
  const count = [0, 0, 0]
  n.forEach((o) => {
    count[o] += 1
  })
  let j = 0
  for (let i = 0; i < count.length; i++) {
    while (count[i]) {
      count[i]--
      n[j] = i
      j++
    }
  }
}
