/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

export function dailyTemperatures(temperatures) {
  const stack = [],
    results = Array(temperatures.length)
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temperature = temperatures[i]
    while (stack.length && temperature >= stack[stack.length - 1].temperature) {
      stack.pop()
    }
    results[i] = stack.length ? stack[stack.length - 1].index - i : 0
    stack.push({
      index: i,
      temperature,
    })
  }
  return results
}
