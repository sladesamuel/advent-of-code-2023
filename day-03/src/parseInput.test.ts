import { Cell } from "./Grid"
import parseInput from "./parseInput"

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const assertRow = (row: Cell[], ...expectedCells: Cell[]) => {
  expect(row).toHaveLength(expectedCells.length)

  for (let i = 0; i < expectedCells.length; i++) {
    expect(row[i]).toEqual(expectedCells[i])
  }
}

describe("parseInput()", () => {
  it("should parse the input into the expected values", () => {
    const { columns, rows, cells } = parseInput(input)

    expect(columns).toEqual(10)
    expect(rows).toEqual(10)
    expect(cells).toHaveLength(10)

    const [
      row1, row2, row3, row4, row5,
      row6, row7, row8, row9, row10
    ] = cells

    assertRow(row1, 4, 6, 7, ".", ".", 1, 1, 4, ".", ".")
    assertRow(row2, ".", ".", ".", "*", ".", ".", ".", ".", ".", ".")
    assertRow(row3, ".", ".", 3, 5, ".", ".", 6, 3, 3, ".")
    assertRow(row4, ".", ".", ".", ".", ".", ".", "#", ".", ".", ".")
    assertRow(row5, 6, 1, 7, "*", ".", ".", ".", ".", ".", ".")
    assertRow(row6, ".", ".", ".", ".", ".", "+", ".", 5, 8, ".")
    assertRow(row7, ".", ".", 5, 9, 2, ".", ".", ".", ".", ".")
    assertRow(row8, ".", ".", ".", ".", ".", ".", 7, 5, 5, ".")
    assertRow(row9, ".", ".", ".", "$", ".", "*", ".", ".", ".", ".")
    assertRow(row10, ".", 6, 6, 4, ".", 5, 9, 8, ".", ".")
  })
})
