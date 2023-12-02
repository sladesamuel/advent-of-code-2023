import { readFileSync } from "fs"
import run from "./game/runPart1"

const [, , part, inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()

if (part === "part1") {
  const result = run(input)

  console.log(`The result for Part 1 is: ${result}`)
}
