class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set name(val) {
    if (val === "") {
      this._name = "Неизвестно";
    } else {
      this._name = val;
    }
  }

  get name() {
    return this._name;
  }

  set age(num) {
    if (num < 0) {
      this._age = 0;
    } else if (num > 120) {
      this._age = 120;
    } else {
      this._age = num;
    }
  }

  get age() {
    return this._age;
  }
}
