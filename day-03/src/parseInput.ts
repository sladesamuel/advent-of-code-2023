import Grid, { Cell, isNumber } from "./Grid"

const parseLine = (line: string): Cell[] => {
  const cells: Cell[] = new Array(line.length)

  for (let i = 0; i < line.length; i++) {
    const value = line[i]

    if (isNumber(value)) {
      cells[i] = parseInt(value)
    }
    else {
      cells[i] = value[0]
    }
  }

  return cells
}

export default (input: string): Grid => {
  const lines = input.match(/[^\r\n]+/g) ?? []
  const [firstLine] = lines

  return {
    columns: firstLine?.length ?? 0,
    rows: lines.length,
    cells: lines.map(parseLine)
  }
}
