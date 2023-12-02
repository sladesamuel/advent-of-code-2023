import { readFileSync } from "fs"
import runPart1 from "./game/runPart1"
import runPart2 from "./game/runPart2"

const [, , part, inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()

if (part === "part1") {
  const result = runPart1(input)

  console.log(`The result for Part 1 is: ${result}`)
}
else {
  const result = runPart2(input)

  console.log(`The result for Part 2 is: ${result}`)
}
