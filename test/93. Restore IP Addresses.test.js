import { restoreIpAddresses } from '../src/93. Restore IP Addresses'

describe('restoreIpAddresses', () => {
  test('it returns all possible valid IP addresses that can be obtained from s', () => {
    expect(restoreIpAddresses('25525511135')).toEqual(
      expect.arrayContaining(['255.255.11.135', '255.255.111.35'])
    )
    expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0'])
    expect(restoreIpAddresses('1111')).toEqual(['1.1.1.1'])
    expect(restoreIpAddresses('010010')).toEqual(
      expect.arrayContaining(['0.10.0.10', '0.100.1.0'])
    )
    expect(restoreIpAddresses('101023')).toEqual(
      expect.arrayContaining([
        '1.0.10.23',
        '1.0.102.3',
        '10.1.0.23',
        '10.10.2.3',
        '101.0.2.3',
      ])
    )
  })
})
