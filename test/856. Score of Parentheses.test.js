import { scoreOfParentheses } from '../src/856. Score of Parentheses'

describe('scoreOfParentheses', () => {
  test('it computes the score of balanced parentheses string S', () => {
    expect(scoreOfParentheses('()')).toBe(1)
    expect(scoreOfParentheses('(())')).toBe(2)
    expect(scoreOfParentheses('()()')).toBe(2)
    expect(scoreOfParentheses('(()(()))')).toBe(6)
  })
})
