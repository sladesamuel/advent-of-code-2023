import Part from "./Part"
import calculatePartSum from "./calculatePartSum"

const createPart = (partNumber: number): Part => ({
  row: 0,
  columns: [],
  partNumber
})

describe("calculatePartSum()", () => {
  it("should return the sum of all parts", () => {
    const parts: Part[] = [
      createPart(44),
      createPart(1),
      createPart(67),
      createPart(128),
      createPart(99)
    ]

    const result = calculatePartSum(parts)

    expect(result).toEqual(339)
  })
})
