import { canJump } from '../src/55. Jump Game'

describe('canJump', () => {
  test('it checks whether you are able to reach the last index', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })
})
