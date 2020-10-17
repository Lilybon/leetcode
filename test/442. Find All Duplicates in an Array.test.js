import { findDuplicates } from '../src/442. Find All Duplicates in an Array'

describe('findDuplicates', () => {
  test('it finds all the elements that appear twice in the array', () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3])
  })
})
