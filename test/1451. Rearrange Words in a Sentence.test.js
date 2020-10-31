import { arrangeWords } from '../src/1451. Rearrange Words in a Sentence'

describe('arrangeWords', () => {
  test('it returns the new text rearranged in an increasing order of their lengths', () => {
    expect(arrangeWords('Leetcode is cool')).toBe('Is cool leetcode')
    expect(arrangeWords('Keep calm and code on')).toBe('On and keep calm code')
    expect(arrangeWords('To be or not to be')).toBe('To be or to be not')
  })
})
