import { RLEIterator } from '../src/900. RLE Iterator'

describe('RLEIterator', () => {
  test('it represents an run-length encoding iterator', () => {
    const iterator = new RLEIterator([3, 8, 0, 9, 2, 5])
    expect(iterator.next(2)).toBe(8)
    expect(iterator.next(1)).toBe(8)
    expect(iterator.next(1)).toBe(5)
    expect(iterator.next(2)).toBe(-1)
  })
})
