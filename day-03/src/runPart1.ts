import calculatePartSum from "./calculatePartSum"
import filterParts from "./filterParts"
import identifyParts from "./identifyParts"
import parseInput from "./parseInput"

export default (input: string): number => {
  const grid = parseInput(input)
  const parts = identifyParts(grid)
  const filtered = filterParts(grid, parts)

  return calculatePartSum(filtered)
}
