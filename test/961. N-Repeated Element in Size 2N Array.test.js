import { repeatedNTimes } from '../src/961. N-Repeated Element in Size 2N Array'

describe('repeatedNTimes', () => {
  test('it returns the element that is repeated n times', () => {
    expect(repeatedNTimes([1, 2, 3, 3])).toBe(3)
    expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2)
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5)
  })
})
