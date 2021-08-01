import { reverseStr } from '../src/541. Reverse String II'

describe('reverseStr', () => {
  test('it reverses the first k characters for every 2k characters counting from the start of the string', () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
    expect(reverseStr('abcd', 2)).toBe('bacd')
  })
})
