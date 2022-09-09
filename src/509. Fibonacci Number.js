/**
 * @param {number} n
 * @return {number}
 */

// Optimize DP
export function fib(n) {
  if (n === 0) return 0
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    ;[dp[0], dp[1]] = [dp[1], dp[0] + dp[1]]
  }
  return dp[1]
}

// DP
// function fib(n) {
//   const dp = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n]
// }

// recursive
// function fib (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return fib(n - 1) + fib(n - 2)
// }

// dynamic programming + memoization
// const fib = fibWithMemo()
// function fibWithMemo () {
//   const dp = [0, 1]
//   return f(n)
//   function f (num) {
//     if (dp[num] !== undefined) return dp[num]
//     for (let i = dp.length; i <= num; i++) {
//       dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     return dp[num]
//   }
// }

// recursive + memoization
// const fib = fibWithMemo()
// function fibWithMemo () {
//   const dp = [0, 1]
//   return f(n)
//   function f (num) {
//     if (dp[num] !== undefined) return dp[num]
//     dp[num - 1] = f(num - 1)
//     dp[num - 2] = f(num - 2)
//     return dp[num - 1] + dp[num - 2]
//   }
// }
