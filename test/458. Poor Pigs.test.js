import { poorPigs } from '../src/458. Poor Pigs'

describe('poorPigs', () => {
  test('it returns the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time', () => {
    expect(poorPigs(1000, 15, 60)).toBe(5)
    expect(poorPigs(4, 15, 15)).toBe(2)
    expect(poorPigs(4, 15, 30)).toBe(2)
  })
})
