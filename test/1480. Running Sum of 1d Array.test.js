import { runningSum } from '../src/1480. Running Sum of 1d Array'

describe('runningSum', () => {
  test('it returns the running sum of nums', () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5])
  })
})
