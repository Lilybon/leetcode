/**
 * @param {string[]} words
 * @return {number}
 */

export function uniqueMorseRepresentations(words) {
  const morseCodes = [
      '.-',
      '-...',
      '-.-.',
      '-..',
      '.',
      '..-.',
      '--.',
      '....',
      '..',
      '.---',
      '-.-',
      '.-..',
      '--',
      '-.',
      '---',
      '.--.',
      '--.-',
      '.-.',
      '...',
      '-',
      '..-',
      '...-',
      '.--',
      '-..-',
      '-.--',
      '--..',
    ],
    transformations = new Set()
  for (let word of words) {
    let transformation = ''
    for (let char of word) {
      transformation += morseCodes[char.charCodeAt(0) - 97]
    }
    transformations.add(transformation)
  }
  return transformations.size
}
