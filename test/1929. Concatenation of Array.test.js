import { getConcatenation } from '../src/1929. Concatenation of Array'

describe('getConcatenation', () => {
  test('it returns ans which is the concatenation of two nums arrays', () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1])
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1])
  })
})
