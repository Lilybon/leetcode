import { maxIncreaseKeepingSkyline } from '../src/807. Max Increase to Keep City Skyline'

describe('maxIncreaseKeepingSkyline', () => {
  test(`it returns the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction`, () => {
    expect(
      maxIncreaseKeepingSkyline([
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0],
      ]),
    ).toBe(35)
    expect(
      maxIncreaseKeepingSkyline([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toBe(0)
  })
})
