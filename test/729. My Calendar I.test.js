import { MyCalendar } from '../src/729. My Calendar I'

describe('MyCalendar', () => {
  test('it implements the MyCalendar class', () => {
    const myCalendar = new MyCalendar()
    expect(myCalendar.book(10, 20)).toBe(true)
    expect(myCalendar.book(15, 25)).toBe(false)
    expect(myCalendar.book(20, 30)).toBe(true)
  })
})
