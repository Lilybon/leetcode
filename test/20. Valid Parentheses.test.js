import { isValid } from '../src/20. Valid Parentheses'

describe('isValid', () => {
  test('it checks whether brackets closed by same type of brackets and arranged in correct order', () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('(]')).toBe(false)
    expect(isValid('([)]')).toBe(false)
    expect(isValid('{[]}')).toBe(true)
  })
})
