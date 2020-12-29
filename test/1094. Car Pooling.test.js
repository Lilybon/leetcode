import { carPooling } from '../src/1094. Car Pooling'

describe('carPooling', () => {
  test('it returns true if and only if it is possible to pick up and drop off all passengers for all the given trips', () => {
    const trip1 = [
      [2, 1, 5],
      [3, 3, 7],
    ]
    expect(carPooling(trip1, 4)).toBe(false)

    const trip2 = [
      [2, 1, 5],
      [3, 3, 7],
    ]
    expect(carPooling(trip2, 5)).toBe(true)

    const trip3 = [
      [2, 1, 5],
      [3, 5, 7],
    ]
    expect(carPooling(trip3, 3)).toBe(true)

    const trip4 = [
      [3, 2, 7],
      [3, 7, 9],
      [8, 3, 9],
    ]
    expect(carPooling(trip4, 11)).toBe(true)
  })
})
