import { validateStackSequences } from '../src/946. Validate Stack Sequences'

describe('validateStackSequences', () => {
  test('it returns true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack', () => {
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true)
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false)
  })
})
