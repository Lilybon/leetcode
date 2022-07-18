import { defangIPaddr } from '../src/1108. Defanging an IP Address'

describe('defangIPaddr', () => {
  test('it returns a defanged version of that IP address', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1')
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0')
  })
})
