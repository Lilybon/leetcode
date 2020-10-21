import { printVertically } from '../src/1324. Print Words Vertically'

describe('printVertically', () => {
  test('it returns all the words vertically in the same order in which they appear in s', () => {
    expect(printVertically('HOW ARE YOU')).toEqual(['HAY', 'ORO', 'WEU'])
    expect(printVertically('TO BE OR NOT TO BE')).toEqual([
      'TBONTB',
      'OEROOE',
      '   T',
    ])
    expect(printVertically('CONTEST IS COMING')).toEqual([
      'CIC',
      'OSO',
      'N M',
      'T I',
      'E N',
      'S G',
      'T',
    ])
  })
})
