import { WordDictionary } from '../src/211. Design Add and Search Words Data Structure'

describe('WordDictionary', () => {
  test('it generates a dictionary which supports finding if a word matchs any added string', () => {
    const wordDict = new WordDictionary()
    wordDict.addWord('bad')
    wordDict.addWord('dad')
    wordDict.addWord('mad')
    expect(wordDict.search('pad')).toBe(false)
    expect(wordDict.search('bad')).toBe(true)
    expect(wordDict.search('.ad')).toBe(true)
    expect(wordDict.search('b..')).toBe(true)
  })
})
