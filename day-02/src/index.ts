import { readFileSync } from "fs"
import run from "./game/run"

const [, , inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()
const result = run(input)

console.log(`The result is: ${result}`)
