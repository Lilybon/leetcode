import { minCostClimbingStairs } from '../src/746. Min Cost Climbing Stairs'

describe('it finds minimum cost to reach the top of the floor', () => {
  test('', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })
})
