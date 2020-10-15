import { Trie } from '../src/208. Implement Trie (Prefix Tree)'

describe('Trie', () => {
  test('it generates a trie which has insert, search, and startsWith methods', () => {
    const trie = new Trie()
    trie.insert('apple')
    expect(trie.search('apple')).toBe(true)
    expect(trie.search('app')).toBe(false)
    expect(trie.startsWith('app')).toBe(true)
    trie.insert('app')
    expect(trie.search('app')).toBe(true)
  })
})
