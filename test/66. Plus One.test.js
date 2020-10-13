import { plusOne } from '../src/66. Plus One'

describe('plusOne', () => {
  test('it plus one from the end of array of digits representing a non-negative integer', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
    expect(plusOne([0])).toEqual([1])
  })
})
