import Game from "./Game"

describe("Game", () => {
  it("should return the expected id", () => {
    const game: Game = { id: 1 }

    expect(game.id).toEqual(1)
  })
})
