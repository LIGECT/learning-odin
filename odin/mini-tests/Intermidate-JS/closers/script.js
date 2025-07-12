function makeMultiplier(firstManNumber) {
  let first = firstManNumber;

  return function sum(secondManNumber) {
    const second = secondManNumber;
    return first * second;
  };
}

const triple = makeMultiplier(3);
console.log(triple(4)); // 12

const double = makeMultiplier(2);
const crazy = makeMultiplier(666);

console.log(double(5)); // ?
console.log(crazy(1)); // ?

function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log("A is " + a + " B is " + b);

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});

function createPlayer(name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}

const originalProfile = {
  name: "Илья",
  age: 23,
  city: "Харьков",
};

const updatedProfile = {
  age: 24,
  hobby: "Программирование",
};

const returnProfile = Object.assign({}, originalProfile, updatedProfile);

console.log(returnProfile);

const user = (function () {
  const name = "Илья";
  return {
    getName: () => "Привет, " + name + "!",
  };
})();

console.log(user.getName());
