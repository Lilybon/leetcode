/**
 * @param {string} text
 * @return {string}
 */

/*
export function arrangeWords (text) {
  const words = text.split(' ')
  words[0] = formatFirstWord(words[0], 'toLowerCase')
  const map = {}
  for (let word of words) {
    let len = word.length
    if (!map[len]) map[len] = []
    map[len].push(word)
  }
  return Object.keys(map)
    .reduce((text, key, idx) => {
      if (idx === 0) map[key][0] = formatFirstWord(map[key][0], 'toUpperCase')
      return text + map[key].join(' ') + ' '
    }, '')
    .trimRight()
}

function formatFirstWord (word, handler) {
  return word[0][handler]() + word.slice(1)
}
 */

export function arrangeWords(text) {
  const words = text.split(' ')
  words[0] = words[0][0].toLowerCase() + words[0].slice(1)
  words.sort((a, b) => a.length - b.length)
  words[0] = words[0][0].toUpperCase() + words[0].slice(1)
  return words.join(' ')
}
