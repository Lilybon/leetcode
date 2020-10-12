/**
 * @param {number} n
 * @return {number[]}
 */

/*
function grayCode (n) {
  let arr = [0]
  for (let i = 0; i < n; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      arr.push(arr[j] | 1 << i)
    }
  }
  return arr
}
 */

function grayCode(n) {
  if (n === 0) return [0]
  const res = grayCode(n - 1)
  let mask = 1 << (n - 1)
  for (let i = res.length - 1; i >= 0; i--) {
    res.push(res[i] | mask)
  }
  return res
}
