import Grid from "./Grid"
import Part from "./Part"
import isPartNumber from "./isPartNumber"

const createEmptyRow = () => [...new Array(10).fill(".")]
const grid: Grid = {
  columns: 10,
  rows: 5,
  cells: [
    createEmptyRow(),
    createEmptyRow(),
    createEmptyRow(),
    createEmptyRow(),
    createEmptyRow()
  ]
}

describe("isPartNumber()", () => {
  beforeEach(() => {
    for (const row of grid.cells) {
      for (let y = 0; y < row.length; y++) {
        row[y] = "."
      }
    }
  })

  /*
   * ..........
   * ..........
   * ..4.......
   * ..........
   * ..........
   */
  it("should return false when 1-digit part is not surrounded by any symbols", () => {
    grid.cells[2][2] = 4

    const part: Part = {
      partNumber: 4,
      row: 2,
      columns: [2]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(false)
  })

  /*
   * ..........
   * ..........
   * ..456.....
   * ..........
   * ..........
   */
  it("should return false when 3-digit part is not surrounded by any symbols", () => {
    grid.cells[2][2] = 4
    grid.cells[2][3] = 5
    grid.cells[2][4] = 6

    const part: Part = {
      partNumber: 456,
      row: 2,
      columns: [2, 3, 4]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(false)
  })

  /*
   * ..........
   * .*........
   * 4.........
   * ..........
   * ..........
   */
  it("should return true when 1-digit part has adjacent symbol and is at edge", () => {
    grid.cells[1][1] = "*"
    grid.cells[2][0] = 4

    const part: Part = {
      partNumber: 4,
      row: 2,
      columns: [0]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(true)
  })

  /*
   * ..........
   * ..........
   * 4.........
   * ..........
   * ..........
   */
  it("should return false when 1-digit part has no adjacent symbols and is at edge", () => {
    grid.cells[2][0] = 4

    const part: Part = {
      partNumber: 4,
      row: 2,
      columns: [0]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(false)
  })

  /*
   * ..........
   * .ooo......
   * .o4o......
   * .ooo......
   * ..........
   */
  it.each([
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3]
  ])("should return true when symbol is adjacent to 1-digit part", (row: number, column: number) => {
    grid.cells[row][column] = "*"
    grid.cells[2][2] = 4

    const part: Part = {
      partNumber: 4,
      row: 2,
      columns: [2]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(true)
  })

  /*
   * ..........
   * ..........
   * ..ooooo...
   * ..o666o...
   * ..ooooo...
   */
  it.each([
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [3, 2],
    [3, 6],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6]
  ])("should return true when symbol is adjacent to 3-digit part", (row: number, column: number) => {
    grid.cells[row][column] = "*"
    grid.cells[3][3] = 6
    grid.cells[3][4] = 6
    grid.cells[3][5] = 6

    const part: Part = {
      partNumber: 666,
      row: 3,
      columns: [3, 4, 5]
    }

    const result = isPartNumber(part, grid)

    expect(result).toEqual(true)
  })
})
