const run = require("./run")

describe("run()", () => {
  it("should return 0 when the input is empty", () => {
    const result = run("")

    expect(result).toEqual(0)
  })

  it("should return 0 when the input only contains letters", () => {
    const result = run("abc")

    expect(result).toEqual(0)
  })

  it("should return 11 when the input is 1", () => {
    const result = run("1")

    expect(result).toEqual(11)
  })

  it("should return 11 when the input is a1a", () => {
    const result = run("a1a")

    expect(result).toEqual(11)
  })

  it("should return 11 when the input is a1b1a", () => {
    const result = run("a1b1a")

    expect(result).toEqual(11)
  })

  it("should return 34 when the input is 3bvcd4dd", () => {
    const result = run("3bvcd4dd")

    expect(result).toEqual(34)
  })

  it("should return 136 when the input is multiline", () => {
    const result = run(`
    3
    abc
    ad5csac
    m1dd8klj
    3nh0

    `)

    expect(result).toEqual(136)
  })
})
