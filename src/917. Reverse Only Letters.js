/**
 * @param {string} s
 * @return {string}
 */

export function reverseOnlyLetters(s) {
  const arr = s.split('')
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    if (!isLetter(arr[left])) left++
    else if (!isLetter(arr[right])) right--
    else {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return arr.join('')
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char)
}
