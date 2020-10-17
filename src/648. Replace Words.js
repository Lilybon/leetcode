/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

export function replaceWords(dictionary, sentence) {
  const trie = dictionary.reduce((map, word) => buildMap(map, word), {})
  return sentence
    .split(' ')
    .map((word) => replaceWord(trie, word))
    .join(' ')
}

function buildMap(map, word) {
  let node = map,
    idx = 0
  while (idx < word.length) {
    if (node.isEnd) return map
    let char = word[idx]
    if (!node[char]) node[char] = {}
    node = node[char]
    idx++
  }
  node.isEnd = true
  return map
}

function replaceWord(map, word) {
  let node = map,
    idx = 0,
    shorten = ''
  while (idx < word.length) {
    let char = word[idx]
    if (node.isEnd) return shorten
    if (!node[char]) return word
    shorten += char
    node = node[char]
    idx++
  }
  return node.isEnd ? shorten : word
}
