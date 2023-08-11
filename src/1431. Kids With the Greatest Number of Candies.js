/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

export function kidsWithCandies(candies, extraCandies) {
  const maxCandy = candies.reduce(
    (maxCandy, candy) => Math.max(maxCandy, candy),
    0,
  )
  return candies.map((candy) => candy + extraCandies >= maxCandy)
}
