import { search } from '../src/704. Binary Search'

describe('search', () => {
  test('it returns index if target exists', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })
  test("it returns -1 if target doesn't exist", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })
})
