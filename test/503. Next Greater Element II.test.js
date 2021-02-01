import { nextGreaterElements } from '../src/503. Next Greater Element II'

describe('nextGreaterElements', () => {
  test('it prints the next greater number for every element in a rotated list', () => {
    expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2])
  })
})
