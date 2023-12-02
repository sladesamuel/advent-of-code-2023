import Game from "./Game"
import calculateResult from "./calculateResult"

describe("calculateResult()", () => {
  it("should return the sum of all game Ids", () => {
    const games: Game[] = [
      { id: 1, sets: [] },
      { id: 2, sets: [] },
      { id: 3, sets: [] },
      { id: 4, sets: [] }
    ]

    const result = calculateResult(games)

    expect(result).toEqual(10)
  })
})
