/**
 * @param {string} columnTitle
 * @return {number}
 */

export function titleToNumber(columnTitle) {
  const n = columnTitle.length
  let result = 0
  for (let i = 0; i < n; i++) {
    result += (columnTitle[i].charCodeAt(0) - 64) * 26 ** (n - 1 - i)
  }
  return result
}
