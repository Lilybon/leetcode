import { uniqueMorseRepresentations } from '../src/804. Unique Morse Code Words'

describe('uniqueMorseRepresentations', () => {
  test('it returns the number of different transformations among all words we have', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
    expect(uniqueMorseRepresentations(['a'])).toBe(1)
  })
})
