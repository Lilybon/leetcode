import { findCircleNum } from '../src/547. Friend Circles'

describe('findCircleNum', () => {
  test('it outputs the total number of friend circles among all the students', () => {
    const relationship = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ]
    expect(findCircleNum(relationship)).toBe(2)
  })
})
