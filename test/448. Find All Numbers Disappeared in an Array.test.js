import { findDisappearedNumbers } from '../src/448. Find All Numbers Disappeared in an Array'

describe('findDisappearedNumbers', () => {
  test('it finds all the elements that do not appear in the array', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
  })
})
