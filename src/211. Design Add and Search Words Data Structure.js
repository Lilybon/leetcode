export class WordDictionary {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {}
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let current = this.root
    for (let char of word) {
      if (!current[char]) current[char] = {}
      current = current[char]
    }
    current.isEnd = true
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this._searchHelper(word, 0, this.root)
  }
  _searchHelper(word, idx, root) {
    if (typeof root !== 'object') return false
    if (idx === word.length) return !!root.isEnd
    const char = word[idx]
    let found = false
    if (char === '.') {
      for (let nextChar in root) {
        let tmpFound = this._searchHelper(word, idx + 1, root[nextChar])
        found = found || tmpFound
      }
    } else {
      found = this._searchHelper(word, idx + 1, root[char])
    }
    return found
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
