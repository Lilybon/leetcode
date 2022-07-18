/**
 * @param {string} address
 * @return {string}
 */

export function defangIPaddr(address) {
  return address.replaceAll('.', '[.]')
}
