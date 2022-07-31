/**
 * @param {number[]} grades
 * @return {number}
 */
export function maximumGroups(grades) {
  /**
   * 1 + ... + k <= n
   * (k + 1) * k / 2 <= n
   * (k + 0.5) * (k + 0.5) <= 2 * n + 0.5 ** 2
   * k <= sqrt(2 * n + 0.25) - 0.5
   */
  return Math.floor(Math.sqrt(grades.length * 2 + 0.25) - 0.5)
}
