const processLine = (line) => {
  const [, firstNumber] = line.match(/^[a-z]*(\d)?/)
  const [, lastNumber] = line.match(/(\d)?[a-z]*$/)

  const value = `${firstNumber}${lastNumber}`

  console.log(`Converted "${line}" into ${value}`)
  const result = parseInt(value)

  return isNaN(result) ? 0 : result
}

module.exports = (input) => {
  const lines = input.match(/[^\r\n]+/g) ?? []
  const values = lines
    .filter(value => !!value)
    .map(line => processLine(line.trim()))

  return values.reduce((a, b) => a + b, 0)
}
