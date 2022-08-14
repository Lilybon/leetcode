import { edgeScore } from '../src/2374. Node With Highest Edge Score'

describe('edgeScore', () => {
  test('it returns the node with the highest edge score', () => {
    expect(edgeScore([1, 0, 0, 0, 0, 7, 7, 5])).toBe(7)
    expect(edgeScore([2, 0, 0, 2])).toBe(0)
  })
})
