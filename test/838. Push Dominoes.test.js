import { pushDominoes } from '../src/838. Push Dominoes'

describe('pushDominoes', () => {
  test('it returns a string representing the final state of falling dominates', () => {
    expect(pushDominoes('.L.R...LR..L..')).toBe('LL.RR.LLRRLL..')
    expect(pushDominoes('RR.L')).toBe('RR.L')
  })
})
