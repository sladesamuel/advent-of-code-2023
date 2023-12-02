import Game from "./Game";

export default (games: Game[]): number =>
  games.map(game => game.id)
    .reduce((a, b) => a + b, 0)
