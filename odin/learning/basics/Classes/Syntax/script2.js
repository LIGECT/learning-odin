class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title}, написанная ${this.author}, была опубликована в ${this.year} году.`;
  }

  getAge() {
    const today = new Date();
    const year = today.getFullYear();
    return year - this.year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (typeof value !== "number" || value > currentYear) {
      throw new Error(`Год "${value}" некорректен.`);
    } else {
      this._year = value;
    }
  }

  get year() {
    return this._year;
  }
}
