import { splitIntoFibonacci } from '../src/842. Split Array into Fibonacci Sequence'

describe('splitIntoFibonacci', () => {
  test('it returns any Fibonacci-like sequence split from num', () => {
    expect(splitIntoFibonacci('1101111')).toEqual([11, 0, 11, 11])
  })
  test('it returns empty array if such sequence cannot be done', () => {
    expect(splitIntoFibonacci('112358130')).toEqual([])
    expect(splitIntoFibonacci('0123')).toEqual([])
  })
})
