import { mirrorReflection } from '../src/858. Mirror Reflection'

describe('mirrorReflection', () => {
  test('it returns the number of the receptor that the ray meets first', () => {
    expect(mirrorReflection(2, 1)).toBe(2)
    expect(mirrorReflection(3, 1)).toBe(1)
  })
})
