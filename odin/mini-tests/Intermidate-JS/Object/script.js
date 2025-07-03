let Character = {
  health: 100,
  greet() {
    return "Hello, I'm character";
  },

  damage(amount) {
    this.health -= amount;
  },
};

let Warrior = {
  strength: 30,
  attack() {
    return "Attacked with sword!";
  },
  __proto__: Character,
};

let dragonSlayer = {
  hasDragonScale: true,
  attack() {
    return "Fire strike!";
  },
  __proto__: Warrior,
};

console.log(dragonSlayer.greet());
console.log(dragonSlayer.attack());
console.log(dragonSlayer.strength);
console.log(dragonSlayer.health);

dragonSlayer.damage(10);
console.log(dragonSlayer.health);
