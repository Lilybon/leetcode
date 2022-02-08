export class Bank {
  /**
   * @param {number[]} balance
   */
  constructor(balance) {
    this.balance = balance
  }

  /**
   * @param {number} account1
   * @param {number} account2
   * @param {number} money
   * @return {boolean}
   */
  transfer(account1, account2, money) {
    if (
      this.balance.length < account1 ||
      this.balance.length < account2 ||
      this.balance[account1 - 1] < money
    )
      return false
    this.balance[account1 - 1] -= money
    this.balance[account2 - 1] += money
    return true
  }

  /**
   * @param {number} account
   * @param {number} money
   * @return {boolean}
   */
  deposit(account, money) {
    if (this.balance.length < account) return false
    this.balance[account - 1] += money
    return true
  }

  /**
   * @param {number} account
   * @param {number} money
   * @return {boolean}
   */
  withdraw(account, money) {
    if (this.balance.length < account || this.balance[account - 1] < money)
      return false
    this.balance[account - 1] -= money
    return true
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
