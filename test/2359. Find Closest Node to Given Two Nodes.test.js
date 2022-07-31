import { closestMeetingNode } from '../src/2359. Find Closest Node to Given Two Nodes'

describe('closestMeetingNode', () => {
  test('it returns the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized', () => {
    expect(closestMeetingNode([2, 2, 3, -1], 0, 1)).toBe(2)
    expect(closestMeetingNode([1, 2, -1], 0, 2)).toBe(2)
  })
})
