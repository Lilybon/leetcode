import { replaceElements } from '../src/1299. Replace Elements with Greatest Element on Right Side'

describe('replaceElements', () => {
  test('it replaces every element in the array with the greatest element among the elements to its right', () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1])
  })
})
