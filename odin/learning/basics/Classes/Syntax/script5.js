class Currency {
  constructor(code) {
    this.code = code;
  }

  static convert(amount, rate) {
    return amount * rate;
  }

  getInfo() {
    return `Эта валюта имеет код ${this.code}`;
  }
}

const dollar = new Currency("USD");
console.log(dollar.getInfo());

const converAmount = Currency.convert(100, 1.1);
console.log(`100 USD это примерно ${converAmount} EUR`);
