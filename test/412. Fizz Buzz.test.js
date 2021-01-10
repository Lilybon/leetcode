import { fizzBuzz } from '../src/412. Fizz Buzz'

describe('fizzBuzz', () => {
  test('it generates the string representation of numbers from 1 to n', () => {
    expect(fizzBuzz(15)).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ])
  })
})
