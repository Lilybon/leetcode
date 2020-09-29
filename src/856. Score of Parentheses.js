/**
 * @param {string} S
 * @return {number}
 */

// 1. Stack
/*
const scoreOfParentheses = S => {
  const stack = []
  stack.push(0) // The score of current frame
  for (let char of S) {
    if (char === '(') stack.push(0)
    else {
      let v = stack.pop()
      let w = stack.pop()
      stack.push(w + Math.max(2 * v, 1))
    }
  }
  return stack.pop()
}
 */

// 2. Count Cores
const scoreOfParentheses = (S) => {
  let count = 0,
    balance = 0
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') balance++
    else {
      balance--
      if (S[i - 1] === '(') count += 1 << balance
    }
  }
  return count
}
