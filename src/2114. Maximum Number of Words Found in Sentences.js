/**
 * @param {string[]} sentences
 * @return {number}
 */

export function mostWordsFound(sentences) {
  return sentences.reduce((max, sentence) => {
    const localMax = sentence.split(' ').length
    return Math.max(max, localMax)
  }, 0)
}
