import Grid from "./Grid"
import Part from "./Part"
import filterParts from "./filterParts"

const createPart = (partNumber: number, row: number, ...columns: number[]): Part => ({
  partNumber,
  row,
  columns
})

describe("filterParts()", () => {
  it("should return the filtered set of parts", () => {
    /*
     * ...45
     * ..4*.
     * .....
     * 3...4
     * +....
     */

    const grid: Grid = {
      rows: 5,
      columns: 5,
      cells: [
        [".", ".", ".", 4, 5],
        [".", ".", 5, "*", "."],
        [".", ".", ".", ".", "."],
        [3, ".", ".", ".", 4],
        ["+", ".", ".", ".", "."]
      ]
    }

    const parts: Part[] = [
      createPart(45, 0, 3, 4),
      createPart(5, 1, 2),
      createPart(3, 3, 0),
      createPart(4, 3, 4)
    ]

    const filtered = filterParts(grid, parts)

    expect(filtered).toHaveLength(3)
    expect(filtered[0].partNumber).toEqual(45)
    expect(filtered[1].partNumber).toEqual(5)
    expect(filtered[2].partNumber).toEqual(3)
  })
})
