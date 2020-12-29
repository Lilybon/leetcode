import { removeDuplicates } from '../src/1047. Remove All Adjacent Duplicates In String'

describe('removeDuplicates', () => {
  test('it returns the final string after all duplicate removals have been made', () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
  })
})
