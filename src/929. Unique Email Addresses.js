/**
 * @param {string[]} emails
 * @return {number}
 */

export function numUniqueEmails(emails) {
  const emailSet = new Set()
  for (let email of emails) {
    let [username, domain] = email.split('@')
    const plusIndex = username.indexOf('+')
    if (plusIndex > -1) username = username.slice(0, plusIndex)
    username = username.replace(/\./g, '')
    emailSet.add(username + '@' + domain)
  }
  return emailSet.size
}
