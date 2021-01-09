/**
 * @param {string} s
 * @return {string}
 */

export function reverseVowels(s) {
  const arr = s.split(''),
    vowels = 'aeiouAEIOU'
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    while (!vowels.includes(arr[left]) && left < right) left++
    while (!vowels.includes(arr[right]) && left < right) right--
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
  return arr.join('')
}
