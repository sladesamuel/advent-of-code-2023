import parseGames from "./parseGames"
import CubeSet from "./CubeSet"
import Game from "./Game"

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

const createCubeSet = (red: number, blue: number, green: number): CubeSet => ({
  red, blue, green
})

const assertGame = (game: Game, id: number, ...sets: CubeSet[]) => {

}

describe("parseGames()", () => {
  it("should correctly parse the input into 5 Games", () => {
    const games = parseGames(input)

    expect(games).toHaveLength(5)

    const [game1, game2, game3, game4, game5] = games
    assertGame(game1, 1, createCubeSet(4, 3, 0), createCubeSet(1, 6, 2), createCubeSet(0, 0, 2))
    assertGame(game2, 2, createCubeSet(0, 1, 2), createCubeSet(1, 4, 3), createCubeSet(0, 1, 1))
    assertGame(game3, 3, createCubeSet(20, 6, 8), createCubeSet(4, 5, 13), createCubeSet(1, 0, 5))
    assertGame(game4, 4, createCubeSet(3, 6, 1), createCubeSet(6, 0, 3), createCubeSet(14, 15, 3))
    assertGame(game5, 5, createCubeSet(6, 1, 3), createCubeSet(1, 2, 2))
  })
})
