import { reverseWords } from '../src/151. Reverse Words in a String'

describe('reverseWords', () => {
  test('it returns a string of the words in reverse order concatenated by a single space', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the')
    expect(reverseWords('  hello world  ')).toBe('world hello')
    expect(reverseWords('a good   example')).toBe('example good a')
    expect(reverseWords('  Bob    Loves  Alice   ')).toBe('Alice Loves Bob')
    expect(reverseWords('Alice does not even like bob')).toBe(
      'bob like even not does Alice'
    )
  })
})
