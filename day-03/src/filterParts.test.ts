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
     * 467..114..
     * ...*......
     * ..35..633.
     * ......#...
     */

    const grid: Grid = {
      rows: 4,
      columns: 10,
      cells: [
        [4, 6, 7, ".", ".", 1, 1, 4, ".", "."],
        [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
        [".", ".", 3, 5, ".", ".", 6, 3, 3, "."],
        [".", ".", ".", ".", ".", ".", "#", ".", ".", "."]
      ]
    }

    const parts: Part[] = [
      createPart(467, 0, 0, 1, 2),
      createPart(114, 0, 5, 6, 7),
      createPart(35, 2, 2, 3),
      createPart(633, 2, 5, 6, 7)
    ]

    const filtered = filterParts(grid, parts)

    expect(filtered).toHaveLength(3)
    expect(filtered[0].partNumber).toEqual(467)
    expect(filtered[1].partNumber).toEqual(35)
    expect(filtered[2].partNumber).toEqual(633)
  })
})
