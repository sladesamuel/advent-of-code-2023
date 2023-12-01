const processLine = (line) => {
  const [, firstNumber] = line.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/) ?? [null, null]
  const [, lastNumber] = line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)(?!.*(\d|one|two|three|four|five|six|seven|eight|nine))/) ?? [null, null]

  const value = `${firstNumber}${lastNumber}`
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9")

  console.log(`Converted "${line}" into ${value}`)
  const result = parseInt(value)

  return isNaN(result) ? 0 : result
}

module.exports = (input) => {
  const lines = input.match(/[^\r\n]+/g) ?? []
  const values = lines
    .map(line => line.trim())
    .filter(value => !!value && value !== "")
    .map(processLine)

  return values.reduce((a, b) => a + b, 0)
}
