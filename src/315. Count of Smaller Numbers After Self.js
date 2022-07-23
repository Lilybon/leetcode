/**
 * @param {number[]} nums
 * @return {number[]}
 */

class FenwickTree {
  constructor(n) {
    this.frequencies = new Array(n + 1).fill(0)
  }
  sum(k) {
    let sum = 0
    for (let i = k; i > 0; i -= this.lowbit(i)) {
      sum += this.frequencies[i]
    }
    return sum
  }
  edit(k, delta) {
    for (let i = k; i < this.frequencies.length; i += this.lowbit(i)) {
      this.frequencies[i] += delta
    }
  }
  lowbit(x) {
    return x & -x
  }
}

export function countSmaller(nums) {
  const ranks = new Map()

  for (let value of nums) {
    ranks.set(value, 0)
  }

  let rank = 0
  for (let k of [...ranks.keys()].sort((a, b) => a - b)) {
    ranks.set(k, ++rank)
  }

  const results = [],
    tree = new FenwickTree(ranks.size)
  for (let i = nums.length - 1; i >= 0; i--) {
    const rank = ranks.get(nums[i])
    results.push(tree.sum(rank - 1))
    tree.edit(rank, 1)
  }

  return results.reverse()
}
