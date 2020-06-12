/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = (n) => {
  let count = [0, 0, 0]
  n.forEach((o) => {
    count[o] += 1
  })
  let res = [],
    j = 0
  for (let i = 0; i < count.length; i++) {
    while (count[i]) {
      count[i]--
      n[j] = i
      j++
    }
  }
}
