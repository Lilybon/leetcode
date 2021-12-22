import { getHint } from '../src/299. Bulls and Cows'

describe('getHint', () => {
  test('it returns the hint for your friends in a bulls and cows game', () => {
    expect(getHint('1807', '7810')).toBe('1A3B')
    expect(getHint('1123', '0111')).toBe('1A1B')
  })
})
