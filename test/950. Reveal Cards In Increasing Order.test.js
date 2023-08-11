import { deckRevealedIncreasing } from '../src/950. Reveal Cards In Increasing Order'

describe('deckRevealedIncreasing', () => {
  test('it returns an ordering of the deck that would reveal the cards in increasing order', () => {
    expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toEqual(
      new Uint32Array([2, 13, 3, 11, 5, 17, 7]),
    )
  })
})
