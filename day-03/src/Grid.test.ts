import { isNumber, isSymbol } from "./Grid"

describe("isNumber()", () => {
  it("should return true when the cell is a number", () => {
    const result = isNumber(1)

    expect(result).toEqual(true)
  })

  it("should return false when the cell is a string", () => {
    const result = isNumber("string")

    expect(result).toEqual(false)
  })

  it.each([
    ".", "$", "%", "/", "*", "#", "&", "@", "=", "+"
  ])("should return false for all symbols", (symbol: string) => {
    const result = isNumber(symbol)

    expect(result).toEqual(false)
  })
})

describe("isSymbol", () => {
  it("should return false when the cell is a number", () => {
    const result = isSymbol(1)

    expect(result).toEqual(false)
  })

  it("should return false when the cell is a string", () => {
    const result = isSymbol("string")

    expect(result).toEqual(false)
  })

  it("should return false when the cell is a .", () => {
    const result = isSymbol(".")

    expect(result).toEqual(false)
  })

  it.each([
    "$", "%", "/", "*", "#", "&", "@", "=", "+"
  ])("should return true for all symbols", (symbol: string) => {
    const result = isSymbol(symbol)

    expect(result).toEqual(true)
  })
})
