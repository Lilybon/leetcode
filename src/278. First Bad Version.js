/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const solution = (isBadVersion) =>
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  (n) => {
    let min = 1
    let max = n
    while (max > min) {
      let mid = Math.floor((min + max) / 2)
      if (isBadVersion(mid)) max = mid
      else min = mid + 1
    }
    return max
  }
