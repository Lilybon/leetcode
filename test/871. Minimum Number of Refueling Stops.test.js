import { minRefuelStops } from '../src/871. Minimum Number of Refueling Stops'

describe('minRefuelStops', () => {
  test('it returns the minimum number of refueling stops the car must make in order to reach its destination', () => {
    expect(minRefuelStops(1, 1, [])).toBe(0)
    expect(
      minRefuelStops(100, 10, [
        [10, 60],
        [20, 30],
        [30, 30],
        [60, 40],
      ])
    ).toBe(2)
  })
  test('it return -1 if it cannot reach the destination', () => {
    expect(minRefuelStops(100, 1, [[10, 100]])).toBe(-1)
  })
})
