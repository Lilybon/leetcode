import { numUniqueEmails } from '../src/929. Unique Email Addresses'

describe('numUniqueEmails', () => {
  test('it returns the number of different addresses that actually receive mails', () => {
    const emails1 = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ]
    expect(numUniqueEmails(emails1)).toBe(2)

    const emails2 = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']
    expect(numUniqueEmails(emails2)).toBe(3)
  })
})
