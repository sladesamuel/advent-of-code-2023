import CubeSet from "./CubeSet"
import Game from "./Game"

export type Scenario = {
  red: number
  blue: number
  green: number
}

const canCubeSetCoverScenario = (set: CubeSet, { red, blue, green }: Scenario) =>
  set.red <= red && set.blue <= blue && set.green <= green

const canGameCoverScenario = ({ sets }: Game, scenario: Scenario) =>
  sets.every(set => canCubeSetCoverScenario(set, scenario))

export default (games: Game[], scenario: Scenario): Game[] =>
  games.filter(game => canGameCoverScenario(game, scenario))
