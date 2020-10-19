import { networkDelayTime } from '../src/743. Network Delay Time'

describe('networkDelayTime', () => {
  test('it calculates how long all nodes receive the signal', () => {
    const times = [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ]
    expect(networkDelayTime(times, 4, 2)).toBe(2)
  })
})
