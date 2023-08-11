import { mergeSimilarItems } from '../src/2363. Merge Similar Items'

describe('mergeSimilarItems', () => {
  test('it returns a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei', () => {
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [4, 5],
          [3, 8],
        ],
        [
          [3, 1],
          [1, 5],
        ],
      ),
    ).toEqual([
      [1, 6],
      [3, 9],
      [4, 5],
    ])
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [3, 2],
          [2, 3],
        ],
        [
          [2, 1],
          [3, 2],
          [1, 3],
        ],
      ),
    ).toEqual([
      [1, 4],
      [2, 4],
      [3, 4],
    ])
  })
})
