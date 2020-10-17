import { frequencySort } from '../src/451. Sort Characters By Frequency'

describe('frequencySort', () => {
  test('it sorts string in decreasing order based on the frequency of characters', () => {
    const sorted1 = frequencySort('tree')
    expect(sorted1 === 'eert' || sorted1 === 'eetr').toBe(true)
    const sorted2 = frequencySort('cccaaa')
    expect(sorted2 === 'cccaaa' || sorted2 === 'aaaccc').toBe(true)
  })
})
