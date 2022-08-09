/**
 * @param {number[]} arr
 * @return {number}
 */

export function numFactoredBinaryTrees(arr) {
  arr.sort((a, b) => a - b)
  const map = new Map(arr.map((product) => [product, 1])),
    mod = 10 ** 9 + 7
  for (let product of arr) {
    for (let value of arr) {
      const quotient = product / value
      if (quotient < 1) break
      if (!map.has(quotient)) continue
      map.set(product, map.get(product) + map.get(value) * map.get(quotient))
    }
  }
  return arr.reduce((sum, product) => sum + map.get(product), 0) % mod
}
