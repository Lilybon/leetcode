import { isLongPressedName } from '../src/925. Long Pressed Name'

describe('isLongPressedName', () => {
  test('it returns true if it is possible that it was your friends name, with some characters (possibly none) being long pressed', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true)
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false)
    expect(isLongPressedName('leelee', 'lleeelee')).toBe(true)
    expect(isLongPressedName('laiden', 'laiden')).toBe(true)
  })
})
