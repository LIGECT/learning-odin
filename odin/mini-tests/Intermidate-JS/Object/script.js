function Player(name) {
  this.name = name;
}

const player1 = new Player("Илья");
const player2 = new Player("Вася");

console.log(Object.getPrototypeOf(player1) === Player.prototype); // true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // true
