import { LRUCache } from '../src/146. LRU Cache'

describe('LRUCache', () => {
  test('it generates a Least Recently Used (LRU) cache', () => {
    const lru = new LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    expect(lru.get(1)).toBe(1)
    lru.put(3, 3)
    expect(lru.get(2)).toBe(-1)
    lru.put(4, 4)
    expect(lru.get(1)).toBe(-1)
    expect(lru.get(3)).toBe(3)
    expect(lru.get(4)).toBe(4)
  })
})
