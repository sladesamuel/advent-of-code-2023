import Grid from "./Grid"
import Part from "./Part"
import identifyParts from "./identifyParts"

const assertPart = (part: Part, partNumber: number, row: number, ...columns: number[]) => {
  expect(part.partNumber).toEqual(partNumber)
  expect(part.row).toEqual(row)
  expect(part.columns).toEqual(columns)
}

describe("identifyParts()", () => {
  it("should return no parts when the row has no numbers", () => {
    const grid: Grid = {
      columns: 0,
      rows: 0,
      cells: [
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
      ]
    }

    const parts = identifyParts(grid)

    expect(parts).toHaveLength(0)
  })

  it("should return one 1-digit part when there is one number", () => {
    const grid: Grid = {
      columns: 0,
      rows: 0,
      cells: [
        [".", ".", 3, ".", ".", ".", ".", ".", ".", "."]
      ]
    }

    const parts = identifyParts(grid)

    expect(parts).toHaveLength(1)

    const [part] = parts
    assertPart(part, 3, 0, 2)
  })

  it("should return one 3-digit part when there are 3 numbers side-by-side", () => {
    const grid: Grid = {
      columns: 0,
      rows: 0,
      cells: [
        [".", ".", ".", ".", 1, 2, 3, ".", ".", "."]
      ]
    }

    const parts = identifyParts(grid)

    expect(parts).toHaveLength(1)

    const [part] = parts
    assertPart(part, 123, 0, 4, 5, 6)
  })

  it("should return 2 numbers, 1 1-digit and 1 2-digit when there are those numbers", () => {
    const grid: Grid = {
      columns: 0,
      rows: 0,
      cells: [
        [".", 7, ".", ".", ".", 2, 3, ".", ".", "."]
      ]
    }

    const parts = identifyParts(grid)

    expect(parts).toHaveLength(2)

    const [part1, part2] = parts
    assertPart(part1, 7, 0, 1)
    assertPart(part2, 23, 0, 5, 6)
  })

  it("should return 3 parts over 4 rows", () => {
    const grid: Grid = {
      columns: 0,
      rows: 0,
      cells: [
        [".", 7, ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", 2, 3, ".", ".", "."],
        [".", ".", 9, 8, 7, 5, ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
      ]
    }

    const parts = identifyParts(grid)

    expect(parts).toHaveLength(3)

    const [part1, part2, part3] = parts
    assertPart(part1, 7, 0, 1)
    assertPart(part2, 23, 1, 5, 6)
    assertPart(part3, 9875, 2, 2, 3, 4, 5)
  })
})
