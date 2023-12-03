export type Cell = number | string

export const isNumber = (cell: Cell): cell is number => /\d/.test(cell.toString())
export const isSymbol = (cell: Cell): boolean => /[^0-9a-zA-Z.]/.test(cell.toString())

type Grid = {
  columns: number
  rows: number
  cells: Cell[][]
}

export default Grid
