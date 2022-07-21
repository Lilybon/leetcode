import { shuffle } from '../src/1470. Shuffle the Array'

describe('shuffle', () => {
  test('it returns the array in the form [x1,y1,x2,y2,...,xn,yn]', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7])
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([
      1, 4, 2, 3, 3, 2, 4, 1,
    ])
    expect(shuffle([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2])
  })
})
