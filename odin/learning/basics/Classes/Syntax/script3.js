class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name ${this.name} and me ${this.age} years old`;
  }
}

const vasya = new Person("Vasya", 45);

console.log(vasya.greet());
