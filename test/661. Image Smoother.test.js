import { imageSmoother } from '../src/661. Image Smoother'

describe('imageSmoother', () => {
  test('it returns the image after applying the smoother on each cell of it', () => {
    expect(
      imageSmoother([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
    expect(
      imageSmoother([
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100],
      ])
    ).toEqual([
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ])
  })
})
