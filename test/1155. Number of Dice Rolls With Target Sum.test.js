import { numRollsToTarget } from '../src/1155. Number of Dice Rolls With Target Sum'

describe('numRollsToTarget', () => {
  test('it returns the number of possible ways to roll the dice so the sum of the face up numbers equals target', () => {
    expect(numRollsToTarget(1, 6, 3)).toBe(1)
    expect(numRollsToTarget(2, 6, 7)).toBe(6)
    expect(numRollsToTarget(2, 5, 10)).toBe(1)
    expect(numRollsToTarget(1, 2, 3)).toBe(0)
    expect(numRollsToTarget(30, 30, 500)).toBe(222616187)
  })
})
