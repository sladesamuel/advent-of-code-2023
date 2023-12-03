import Grid from "./Grid"
import Part from "./Part"
import isPartNumber from "./isPartNumber"

export default (grid: Grid, parts: Part[]): Part[] =>
  parts.filter(part => isPartNumber(part, grid))
