import runPart1 from "./runPart1"

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

describe("runPart1()", () => {
  it("should return 4361 when given the dummy input", () => {
    const result = runPart1(input)

    expect(result).toEqual(4361)
  })
})
