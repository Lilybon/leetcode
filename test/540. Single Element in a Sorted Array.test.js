import { singleNonDuplicate } from '../src/540. Single Element in a Sorted Array'

describe('singleNonDuplicate', () => {
  test('it finds this single element that appears only once', () => {
    expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2)
    expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toBe(10)
  })
})
