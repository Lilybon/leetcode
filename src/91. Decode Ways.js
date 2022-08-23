/**
 * @param {string} s
 * @return {number}
 */

// function numDecodings(s) {
//   if (!s || s[0] === '0') return 0

//   let dp = new Array(s.length + 1).fill(0)
//   dp[1] = 1

//   for (let i = 2; i <= s.length; i++) {
//     let n1 = s[i - 1],
//       n2 = s[i - 2],
//       combineN = parseInt(n2 + n1)
//     // CASE: [i - 1]之原有組合 + 單數字組成字母(A~I),組成可能之[i]組合結果
//     if (n1 !== '0') dp[i] += dp[i - 1]
//     // CASE: [i - 2]之原有組合 + 雙數字組成數字(J~Z),組成可能之[i]組合結果
//     // 註: 初次計算到之dp[0] = 0沒有意義,但要設置初始組合數1
//     if (n2 !== '0' && combineN <= 26) dp[i] += Math.max(dp[i - 2], 1)
//     if (dp[i] === 0) return 0 //'00'或'30','40' ...等狀況出現會無法decode出任何結果,回傳0
//   }

//   return dp[s.length]
//   /***
//      ** [額外補充] JS 英文和數字轉換方式
//      *  數轉英
//         parseInt('a', 36) - 9; // 1
//         parseInt('z', 36) - 9; // 26
//         parseInt('A', 36) - 9; // 1
//         parseInt('Z', 36) - 9; // 26
//      *  英轉數
//         'a'.charCodeAt() - 96; // 1
//         'z'.charCodeAt() - 96; // 26
//         'A'.charCodeAt() - 64; // 1
//         'Z'.charCodeAt() - 64; // 26
//     */
// }

export function numDecodings(s) {
  const n = s.length,
    dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (let i = 2; i <= n; i++) {
    const combinedN = s[i - 2] + s[i - 1]
    if (1 <= s[i - 1] && s[i - 1] <= 9) dp[i] += dp[i - 1]
    if (10 <= combinedN && combinedN <= 26) dp[i] += dp[i - 2]
    if (dp[i] === 0) return 0
  }
  return dp[n]
}
