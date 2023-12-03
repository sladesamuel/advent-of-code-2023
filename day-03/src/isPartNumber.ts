import Grid, { isSymbol } from "./Grid"
import Part from "./Part"

type Coordinate = [number, number]

const getSurroundingCoordinates = (row: number, column: number): Coordinate[] => [
  [row - 1, column - 1],
  [row - 1, column],
  [row - 1, column + 1],
  [row, column - 1],
  [row, column + 1],
  [row + 1, column - 1],
  [row + 1, column],
  [row + 1, column + 1]
]

const isOutOfBounds = ({ rows, columns }: Grid, [row, column]: Coordinate): boolean =>
  row < 0 || column < 0 || row >= rows || column >= columns

const isSymbolAtLocation = (grid: Grid, [row, column]: Coordinate): boolean => {
  if (isOutOfBounds(grid, [row, column])) {
    return false
  }

  const cell = grid.cells[row][column]
  if (isSymbol(cell)) {
    return true
  }

  return false
}

const checkForSymbolAllAround = (grid: Grid, row: number, column: number): boolean => {
  const coordinates = getSurroundingCoordinates(row, column)
  const matches = coordinates.filter(coordinate => isSymbolAtLocation(grid, coordinate))

  return matches.length > 0
}

export default ({ columns, row }: Part, grid: Grid): boolean => {

  const matches = columns.filter(column => checkForSymbolAllAround(grid, row, column))

  return matches.length > 0
}
