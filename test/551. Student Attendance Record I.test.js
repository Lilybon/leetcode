import { checkRecord } from '../src/551. Student Attendance Record I'

describe('checkRecord', () => {
  test('it returns whether the student could be rewarded according to his attendance record', () => {
    expect(checkRecord('PPALLP')).toBe(true)
    expect(checkRecord('PPALLL')).toBe(false)
  })
})
