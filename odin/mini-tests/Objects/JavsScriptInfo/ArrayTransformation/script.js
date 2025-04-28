class Calculator {
  constructor() {
    //code
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
  }

  calculate(str) {
    let parts = str.split(" ");
    let a = +parts[0];
    let b = +parts[2];
    let operator = parts[1];
    let operationFunc = this.methods[operator];

    if (!operationFunc) {
      throw new Error(`Оператор "${operator}" не найден`);
    }

    return operationFunc(a, b);
  }

  addMethod(name, func) {
    //code

    this.methods[name] = func;
  }
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("10 * 5"));
