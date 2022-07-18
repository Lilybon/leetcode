import { finalValueAfterOperations } from '../src/2011. Final Value of Variable After Performing Operations'

describe('finalValueAfterOperations', () => {
  test('it returns the final value of X after performing all the operations', () => {
    expect(finalValueAfterOperations(['++X', '++X', 'X++'])).toBe(3)
    expect(finalValueAfterOperations(['X++', '++X', '--X', 'X--'])).toBe(0)
  })
})
