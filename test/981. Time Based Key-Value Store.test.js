import { TimeMap } from '../src/981. Time Based Key-Value Store'

describe('TimeMap', () => {
  test('it creates a timebased key-value store', () => {
    const kv1 = new TimeMap()
    kv1.set('foo', 'bar', 1)
    expect(kv1.get('foo', 1)).toBe('bar')
    expect(kv1.get('foo', 3)).toBe('bar')
    kv1.set('foo', 'bar2', 4)
    expect(kv1.get('foo', 4)).toBe('bar2')
    expect(kv1.get('foo', 5)).toBe('bar2')

    const kv2 = new TimeMap()
    kv2.set('love', 'high', 10)
    kv2.set('love', 'low', 20)
    expect(kv2.get('love', 5)).toBe('')
    expect(kv2.get('love', 10)).toBe('high')
    expect(kv2.get('love', 15)).toBe('high')
    expect(kv2.get('love', 20)).toBe('low')
    expect(kv2.get('love', 25)).toBe('low')
  })
})
