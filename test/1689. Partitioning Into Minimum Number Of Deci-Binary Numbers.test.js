import { minPartitions } from '../src/1689. Partitioning Into Minimum Number Of Deci-Binary Numbers'

describe('minPartitions', () => {
  test('it returns the minimum number of positive deci-binary numbers needed so that they sum up to n', () => {
    expect(minPartitions('32')).toBe(3)
    expect(minPartitions('82734')).toBe(8)
    expect(minPartitions('27346209830709182346')).toBe(9)
  })
})
