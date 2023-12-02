import calculateResult from "./calculateResult"
import filterGamesByScenario, { Scenario } from "./filterGamesByScenario"
import parseGames from "./parseGames"

const scenario: Scenario = {
  red: 12,
  blue: 14,
  green: 13
}

export default (input: string): number => {
  const games = parseGames(input)
  const filtered = filterGamesByScenario(games, scenario)

  return calculateResult(filtered)
}
