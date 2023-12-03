import { readFileSync } from "fs"
import runPart1 from "./runPart1"

const [, , inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()
const result = runPart1(input)

console.log(`Part 1 result = ${result}`)
