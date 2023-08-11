import { generateParenthesis } from '../src/22. Generate Parentheses'

describe('generateParenthesis', () => {
  test('it generates all combinations of well-formed parentheses', () => {
    expect(generateParenthesis(3)).toEqual(
      expect.arrayContaining([
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()',
      ]),
    )
    expect(generateParenthesis(1)).toEqual(expect.arrayContaining(['()']))
  })
})
