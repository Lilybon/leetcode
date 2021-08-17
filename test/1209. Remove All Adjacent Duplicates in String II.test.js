import { removeDuplicates } from '../src/1209. Remove All Adjacent Duplicates in String II'

describe('removeDuplicates', () => {
  test('it returns the final string after all such duplicate removals have been made', () => {
    expect(removeDuplicates('abcd', 2)).toBe('abcd')
    expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa')
    expect(removeDuplicates('pbbcggttciiippooaais', 2)).toBe('ps')
  })
})
