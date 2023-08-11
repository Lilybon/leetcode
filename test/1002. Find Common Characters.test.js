import { commonChars } from '../src/1002. Find Common Characters'

describe('commonChars', () => {
  test('it collects common characters among all words', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(
      expect.arrayContaining(['e', 'l', 'l']),
    )
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(
      expect.arrayContaining(['c', 'o']),
    )
  })
})
