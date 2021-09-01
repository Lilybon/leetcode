import { dailyTemperatures } from '../src/739. Daily Temperatures'

describe('dailyTemperatures', () => {
  test('it returns an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ])
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0])
  })
})
