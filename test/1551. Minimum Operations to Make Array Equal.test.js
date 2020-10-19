import { minOperations } from '../src/1551. Minimum Operations to Make Array Equal'

describe('minOperations', () => {
  test('it returns the minimum number of operations needed to make all the elements of arr equal', () => {
    expect(minOperations(3)).toBe(2)
    expect(minOperations(6)).toBe(9)
  })
})
