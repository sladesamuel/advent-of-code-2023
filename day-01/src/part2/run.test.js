const run = require("./run")

describe("run()", () => {
  it.each([
    ["", 0],
    ["abc", 0],
    ["1", 11],
    ["a1a", 11],
    ["a1b1a", 11],
    ["3bvcd4dd", 34],
    ["one", 11],
    ["two", 22],
    ["three", 33],
    ["four", 44],
    ["five", 55],
    ["six", 66],
    ["seven", 77],
    ["eight", 88],
    ["nine", 99],
    ["threefour", 34],
    ["3four", 34],
    ["abcthreebvcdfour4dd", 34]
  ])("should return the expected result given the input", (input, expectedResult) => {
    console.log("Input is", input)

    const actualResult = run(input)

    expect(actualResult).toEqual(expectedResult)
  })

  it("should return 136 when the input is multiline", () => {
    const result = run(`
    3
    abc
    adfivecsac
    m1dd8klj
    3nh0

    `)

    expect(result).toEqual(136)
  })
})
