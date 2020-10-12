/**
 * @param {number[]} A
 * @return {number[]}
 */

function sortArrayByParity(A) {
  let evens = []
  let odds = []
  for (let item of A) {
    if (item % 2) odds.push(item)
    else evens.push(item)
  }
  return evens.concat(odds)
}
