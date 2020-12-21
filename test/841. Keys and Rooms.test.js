import { canVisitAllRooms } from '../src/841. Keys and Rooms'

describe('canVisitAllRooms', () => {
  test('it returns true if and only if you can enter every room', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true)
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false)
  })
})
