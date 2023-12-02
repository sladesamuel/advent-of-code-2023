import CubeSet from "./CubeSet"
import Game from "./Game"

type CubeType = "red" | "blue" | "green"
type Cube = {
  type: CubeType
  value: number
}

const convertTypeString = (typeString: string): CubeType => {
  switch (typeString) {
    case "red":
      return "red"

    case "blue":
      return "blue"

    case "green":
      return "green"

    default:
      throw new Error(`Unrecognised cube type: ${typeString}`)
  }
}

const parseCube = (cubeString: string): Cube => {
  const [, value, typeString] = /^(\d+) (red|blue|green)$/.exec(cubeString) ?? [null, "", ""]

  return {
    type: convertTypeString(typeString),
    value: parseInt(value)
  }
}

const parseSet = (setString: string): CubeSet => {
  const set: CubeSet = {
    red: 0,
    blue: 0,
    green: 0
  }

  const cubeStrings = setString.split(",")
  const cubes = cubeStrings.map(cube => parseCube(cube.trim()))

  cubes.forEach(cube => set[cube.type] += cube.value)

  return set
}

const parseSets = (setLine: string): CubeSet[] => {
  const setStrings = setLine.split(";")

  return setStrings.map(str => parseSet(str.trim()))
}

const parseGame = (gameLine: string): Game => {
  const [, gameId] = /^Game (\d+):/.exec(gameLine) ?? [null, null]

  if (!gameId) {
    throw new Error(`Failed to find the game Id: ${gameLine}`)
  }

  const setLine = gameLine.replace(`Game ${gameId}: `, "")
  return {
    id: parseInt(gameId),
    sets: parseSets(setLine)
  }
}

export default (input: string): Game[] => {
  const lines = input.match(/[^\r\n]+/g) ?? []
  return lines.map(parseGame)
}
