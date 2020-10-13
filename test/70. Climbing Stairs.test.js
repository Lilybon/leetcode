import { climbStairs } from '../src/70. Climbing Stairs'

describe('climbStairs', () => {
  test('it counts distinct ways you can climb to the top (each time you can climb 1 or 2 step)', () => {
    expect(climbStairs(2)).toBe(2)
    expect(climbStairs(3)).toBe(3)
  })
})
