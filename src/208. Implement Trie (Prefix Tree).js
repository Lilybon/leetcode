class Trie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {}
  }
  traverse(word) {
    let current = this.root
    for (let char of word) {
      if (!current[char]) return null
      current = current[char]
    }
    return current
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let current = this.root
    for (let char of word) {
      if (!current[char]) current[char] = {}
      current = current[char]
    }
    current.isEnd = true
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.traverse(word)
    return node ? !!node.isEnd : false
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(word) {
    let node = this.traverse(word)
    return !!node
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
