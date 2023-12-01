const replaceWordsWithNumbers = (input) =>
  input
    .replace("one", "1")
    .replace("two", "2")
    .replace("three", "3")
    .replace("four", "4")
    .replace("five", "5")
    .replace("six", "6")
    .replace("seven", "7")
    .replace("eight", "8")
    .replace("nine", "9")

const processLine = (line) => {
  const [, firstNumber] = line.match(/^[a-z]*(\d)?/)
  const [, lastNumber] = line.match(/(\d)?[a-z]*$/)

  const value = `${firstNumber}${lastNumber}`

  console.log(`Converted "${line}" into ${value}`)
  const result = parseInt(value)

  return isNaN(result) ? 0 : result
}

module.exports = (input) => {
  const sanitised = replaceWordsWithNumbers(input)
  const lines = sanitised.match(/[^\r\n]+/g) ?? []
  const values = lines
    .map(line => line.trim())
    .filter(value => !!value && value !== "")
    .map(processLine)

  return values.reduce((a, b) => a + b, 0)
}
