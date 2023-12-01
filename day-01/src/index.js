const { readFileSync } = require("fs")
const run = require("./run")

const [, , inputFilePath] = process.argv

const input = readFileSync(inputFilePath).toString()
run(input)
