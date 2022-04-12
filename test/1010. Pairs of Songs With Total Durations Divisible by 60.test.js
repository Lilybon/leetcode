import { numPairsDivisibleBy60 } from '../src/1010. Pairs of Songs With Total Durations Divisible by 60'

describe('numPairsDivisibleBy60', () => {
  test('it returns the number of pairs of songs for which their total duration in seconds is divisible by 60', () => {
    expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toBe(3)
    expect(numPairsDivisibleBy60([60, 60, 60])).toBe(3)
  })
})
