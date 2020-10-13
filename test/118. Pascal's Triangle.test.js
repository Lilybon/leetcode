import { generate } from "../src/118. Pascal's Triangle"

describe('generate', () => {
  test("it generates the first numRows of Pascal's triangle", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ])
  })
})
