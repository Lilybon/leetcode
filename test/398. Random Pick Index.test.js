import { Solution } from '../src/398. Random Pick Index'

describe('Solution', () => {
  test('it randomly outputs the index of a given target number', () => {
    const solution = new Solution([1, 2, 3, 3, 3])
    const rng1 = solution.pick(3)
    expect(rng1 === 2 || rng1 === 3 || rng1 === 4).toBe(true)
    const rng2 = solution.pick(1)
    expect(rng2).toBe(0)
  })
})
