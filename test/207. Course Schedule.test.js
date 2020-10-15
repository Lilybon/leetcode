import { canFinish } from '../src/207. Course Schedule'

describe('canFinish', () => {
  test('is checks whether it is possible for you to finish all courses', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true)
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ])
    ).toBe(false)
  })
})
