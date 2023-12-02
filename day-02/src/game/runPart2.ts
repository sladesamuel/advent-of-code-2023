import Game from "./Game"
import CubeSet from "./CubeSet"
import parseGames from "./parseGames"

const calculateMinimumCubeSet = ({ sets }: Game): CubeSet => {
  const reds = sets.map(set => set.red)
  const blues = sets.map(set => set.blue)
  const greens = sets.map(set => set.green)

  return {
    red: Math.max(...reds),
    blue: Math.max(...blues),
    green: Math.max(...greens)
  }
}

export default (input: string): number => {
  const games = parseGames(input)
  const minimumSets = games.map(calculateMinimumCubeSet)
  const powers = minimumSets.map(({ red, blue, green }: CubeSet) => red * blue * green)

  return powers.reduce((a, b) => a + b)
}
