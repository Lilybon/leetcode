import { Solution } from '../src/384. Shuffle an Array'

describe('Solution', () => {
  test('it shuffles a set of numbers without duplicates', () => {
    const solution = new Solution([1, 2, 3])
    expect(solution.shuffle()).toEqual(expect.arrayContaining([1, 2, 3]))
    expect(solution.reset()).toEqual([1, 2, 3])
    expect(solution.shuffle()).toEqual(expect.arrayContaining([1, 2, 3]))
  })
})
