import { findMiddleIndex } from '../src/1991. Find the Middle Index in Array'

describe('findMiddleIndex', () => {
  test('it returns the leftmost middleIndex that satisfies the condition which left side sum equals to right side sum excluding index itself', () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3)
    expect(findMiddleIndex([1, -1, 4])).toBe(2)
  })
  test('it returns -1 if there is no such index', () => {
    expect(findMiddleIndex([2, 5])).toBe(-1)
  })
})
