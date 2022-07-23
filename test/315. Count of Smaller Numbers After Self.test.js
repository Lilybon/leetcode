import { countSmaller } from '../src/315. Count of Smaller Numbers After Self'

describe('countSmaller', () => {
  test('it returns counts array has the property where counts[i] is the number of smaller elements to the right of nums[i]', () => {
    expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0])
    expect(countSmaller([-1])).toEqual([0])
    expect(countSmaller([-1, -1])).toEqual([0, 0])
  })
})
