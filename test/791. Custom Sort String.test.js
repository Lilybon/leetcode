import { customSortString } from '../src/791. Custom Sort String'

describe('customSortString', () => {
  test('it returns any permutation of T which matchs the order that S was sorted', () => {
    const sorted = customSortString('cba', 'abcd')
    expect(sorted === 'dcba' || sorted === 'cdba' || sorted === 'cbda').toBe(
      true,
    )
  })
})
