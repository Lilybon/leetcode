import { getRow } from "../src/119. Pascal's Triangle II"

describe('getRow', () => {
  test("it returns the rowIndexth row of the Pascal's triangle", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1])
    expect(getRow(0)).toEqual([1])
    expect(getRow(1)).toEqual([1, 1])
  })
})
