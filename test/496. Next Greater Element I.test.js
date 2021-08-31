import { nextGreaterElement } from '../src/496. Next Greater Element I'

describe('nextGreaterElement', () => {
  test('it returns an array ans of length nums1.length such that ans[i] is the next greater element', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1])
  })
})
