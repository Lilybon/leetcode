import { suggestedProducts } from '../src/1268. Search Suggestions System'

describe('suggestedProducts', () => {
  test('it returns list of lists of the suggested products after each character of searchWord is typed', () => {
    expect(
      suggestedProducts(
        ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
        'mouse',
      ),
    ).toEqual([
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
    ])
    expect(suggestedProducts(['havana'], 'havana')).toEqual(
      Array.from(Array(6), () => ['havana']),
    )
    expect(
      suggestedProducts(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags'),
    ).toEqual([
      ['baggage', 'bags', 'banner'],
      ['baggage', 'bags', 'banner'],
      ['baggage', 'bags'],
      ['bags'],
    ])
    expect(suggestedProducts(['havana'], 'tatiana')).toEqual(
      Array.from(Array(7), () => []),
    )
  })
})
