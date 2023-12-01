const { readFileSync } = require("fs")
const runPart1 = require("./part1/run")
const runPart2 = require("./part2/run")

const [, , part, inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()
const result = part === "part1" ? runPart1(input) : runPart2(input)

console.log(`The result is ${result}!`)
