/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

export function suggestedProducts(products, searchWord) {
  const result = [],
    cloneProducts = [...products].sort(),
    MAX_PRODUCTS_PER_ROW = 3
  let target = ''
  for (let char of searchWord) {
    target += char
    let row = [],
      pIdx = 0
    while (row.length < MAX_PRODUCTS_PER_ROW && pIdx < cloneProducts.length) {
      const product = cloneProducts[pIdx]
      if (product.startsWith(target)) {
        row.push(product)
        pIdx++
      } else cloneProducts.splice(pIdx, 1)
    }
    result.push(row)
  }
  return result
}
