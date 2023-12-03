import Part from "./Part"

export default (parts: Part[]): number =>
  parts.map(part => part.partNumber)
    .reduce((a, b) => a + b)
