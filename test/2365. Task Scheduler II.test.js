import { taskSchedulerII } from '../src/2365. Task Scheduler II'

describe('taskSchedulerII', () => {
  test('it returns the minimum number of days needed to complete all tasks', () => {
    expect(taskSchedulerII([1, 2, 1, 2, 3, 1], 3)).toBe(9)
    expect(taskSchedulerII([5, 8, 8, 5], 2)).toBe(6)
  })
})
