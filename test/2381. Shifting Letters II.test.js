import { shiftingLetters } from '../src/2381. Shifting Letters II'

describe('shiftingLetters', () => {
  test('it returns the final string after all such shifts to s are applied', () => {
    expect(
      shiftingLetters('abc', [
        [0, 1, 0],
        [1, 2, 1],
        [0, 2, 1],
      ]),
    ).toBe('ace')
    expect(
      shiftingLetters('dztz', [
        [0, 0, 0],
        [1, 1, 1],
      ]),
    ).toBe('catz')
  })
})
