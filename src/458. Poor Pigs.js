/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */

export function poorPigs(buckets, minutesToDie, minutesToTest) {
  /**
   * ((minutesToDie / minutesToTest) + 1) ^ pigs >= buckets
   * pigs >= log(((minutesToDie / minutesToTest) + 1), buckets)
   */
  const times = Math.ceil(minutesToTest / minutesToDie)
  return Math.ceil(Math.log(buckets) / Math.log(times + 1))
}
