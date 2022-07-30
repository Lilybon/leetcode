import { minCostClimbingStairs } from '../src/746. Min Cost Climbing Stairs'

describe('minCostClimbingStairs', () => {
  test('it finds minimum cost to reach the top of the floor', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })
})
