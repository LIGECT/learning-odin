// function outer() {
//   const outerVar = "Hey I am the outer Var";

//   function inner() {
//     const innerVar = "hey I am an inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }

//   return inner;
// }

// const innerFn = outer();

// function createGreeting(greeting = "") {
//   const myGreet = greeting.toUpperCase();

//   return function (name) {
//     return `${myGreet} ${name}`;
//   };
// }

// const sayHello = createGreeting("hello");
// const sayHey = createGreeting("hey");
// console.log(sayHello("wes"));
// console.log(sayHello("kait"));
// console.log(sayHey("kait"));

function createGame(gamename) {
  let score = 0;

  return function win() {
    score++;
    return `Your name ${gamename} score is ${score}`;
  };
}

const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");
