import { secondsToRemoveOccurrences } from '../src/2380. Time Needed to Rearrange a Binary String'

describe('secondsToRemoveOccurrences', () => {
  test('it returns the number of seconds needed to complete this process', () => {
    expect(secondsToRemoveOccurrences('0110101')).toBe(4)
    expect(secondsToRemoveOccurrences('11100')).toBe(0)
  })
})
