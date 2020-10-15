import { addDigits } from '../src/258. Add Digits'

describe('addDigits', () => {
  test('it repeatedly adds all digits of the num until the result has only one digit', () => {
    expect(addDigits(38)).toBe(2)
  })
})
