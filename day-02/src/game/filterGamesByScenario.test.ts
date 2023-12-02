import CubeSet from "./CubeSet"
import Game from "./Game"
import filterGamesByScenario, { Scenario } from "./filterGamesByScenario"

const createCubeSet = (red: number, blue: number, green: number): CubeSet => ({
  blue, green, red
})

const games: Game[] = [
  // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  {
    id: 1,
    sets: [
      createCubeSet(4, 3, 0),
      createCubeSet(1, 6, 2),
      createCubeSet(0, 0, 2),
    ]
  },

  // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  {
    id: 2,
    sets: [
      createCubeSet(0, 1, 2),
      createCubeSet(1, 4, 3),
      createCubeSet(0, 1, 1)
    ]
  },

  // Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  {
    id: 3,
    sets: [
      createCubeSet(20, 6, 8),
      createCubeSet(4, 5, 13),
      createCubeSet(1, 0, 5)
    ]
  },

  // Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  {
    id: 4,
    sets: [
      createCubeSet(3, 6, 1),
      createCubeSet(6, 0, 3),
      createCubeSet(14, 15, 3)
    ]
  },

  // Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
  {
    id: 5,
    sets: [
      createCubeSet(6, 1, 3),
      createCubeSet(1, 2, 2)
    ]
  }
]

describe("filterGamesByScenario()", () => {
  it("should return games 1, 2 and 5 when the scenario is 12 red, 13 green and 14 blue", () => {
    const resultingGames = filterGamesByScenario(games, {
      red: 12,
      green: 13,
      blue: 14
    })

    expect(resultingGames).toHaveLength(3)
    expect(resultingGames[0].id).toEqual(1)
    expect(resultingGames[1].id).toEqual(2)
    expect(resultingGames[2].id).toEqual(5)
  })

  it("should not filter the given input", () => {
    const games: Game[] = [
      {
        id: 97,
        sets: [
          createCubeSet(0, 1, 2),
          createCubeSet(9, 0, 0),
          createCubeSet(8, 4, 0),
          createCubeSet(1, 14, 4),
          createCubeSet(0, 9, 2),
          createCubeSet(1, 6, 2)
        ]
      }
    ]

    const scenario: Scenario = {
      red: 12,
      blue: 14,
      green: 13
    }

    const resultingGames = filterGamesByScenario(games, scenario)

    expect(resultingGames).toHaveLength(1)
    expect(resultingGames[0].id).toEqual(97)
  })
})
