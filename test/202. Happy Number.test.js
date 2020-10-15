import { isHappy } from '../src/202. Happy Number'

describe('isHappy', () => {
  test("it determine if a number n is 'happy'", () => {
    expect(isHappy(19)).toBe(true)
  })
})
