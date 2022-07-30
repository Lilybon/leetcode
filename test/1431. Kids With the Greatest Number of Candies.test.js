import { kidsWithCandies } from '../src/1431. Kids With the Greatest Number of Candies'

describe('kidsWithCandies', () => {
  test('it returns a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ])
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ])
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true])
  })
})
