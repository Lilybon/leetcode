/**
 * @param {character[]} chars
 * @return {number}
 */

export function compress(chars) {
  const n = chars.length
  let left = 0
  for (let right = 1; right <= n; right++) {
    let count = 1
    while (right < n && chars[right - 1] === chars[right]) {
      count++
      right++
    }
    chars[left++] = chars[right - 1]
    if (count === 1) continue
    for (let digit of String(count)) {
      chars[left++] = digit
    }
  }
  return left
}
