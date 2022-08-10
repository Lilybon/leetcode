import { validPartition } from '../src/2369. Check if There is a Valid Partition For The Array'

describe('validPartition', () => {
  test('it returns true if the array has at least one valid partition. Otherwise, returns false', () => {
    expect(validPartition([4, 4, 4, 5, 6])).toBe(true)
    expect(validPartition([1, 1, 1, 2])).toBe(false)
  })
})
