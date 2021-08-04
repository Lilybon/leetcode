import { licenseKeyFormatting } from '../src/482. License Key Formatting'

describe('licenseKeyFormatting', () => {
  test('it returns the reformatted license key', () => {
    expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W')
    expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J')
  })
})
