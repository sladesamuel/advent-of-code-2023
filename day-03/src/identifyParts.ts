import Grid, { Cell } from "./Grid"
import Part from "./Part"

const createColumns = (startIndex: number, length: number): number[] => {
  const columns: number[] = new Array(length)

  let currentIndex = startIndex;
  for (let i = 0; i < length; i++) {
    columns[i] = currentIndex++
  }

  return columns
}

const identifyParts = (row: Cell[], rowIndex: number): Part[] => {
  const parts: Part[] = []
  const rowString = row.join("")

  const pattern = /\d+/g
  let match: RegExpExecArray | null

  let index = 0
  while ((match = pattern.exec(rowString)) !== null) {
    const [value] = match

    parts[index++] = {
      partNumber: parseInt(value),
      row: rowIndex,
      columns: createColumns(match.index, value.length)
    }
  }

  return parts
}

export default (grid: Grid): Part[] => grid.cells.map(identifyParts).flat()
