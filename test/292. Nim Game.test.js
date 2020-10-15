import { canWinNim } from '../src/292. Nim Game'

describe('canWinNim', () => {
  test('it returns true if you can win the game, otherwise return false', () => {
    expect(canWinNim(4)).toBe(false)
    expect(canWinNim(1)).toBe(true)
    expect(canWinNim(2)).toBe(true)
  })
})
