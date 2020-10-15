import { containsDuplicate } from '../src/217. Contains Duplicate'

describe('containsDuplicate', () => {
  test('it finds if the array contains any duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })
})
