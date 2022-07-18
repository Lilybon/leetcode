/**
 * @param {number[][]} accounts
 * @return {number}
 */

export function maximumWealth(accounts) {
  return accounts.reduce((maxWealth, accounts) => {
    const wealth = accounts.reduce((money, account) => money + account, 0)
    return Math.max(maxWealth, wealth)
  }, 0)
}
