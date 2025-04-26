const sentence = "Это просто тестовое предложение для практики split";
const csvData = "яблоко, банан, апельсин, виноград";
const word = "Программирование";

let arr = sentence.split(" ");
console.log(arr);

let newArrJoin = arr.join("-");
console.log(newArrJoin);

let newCsvData = csvData.split(", ").join(" ");
console.log(newCsvData);

let newWord = word.split("");
console.log(newWord);

let joinWord = newWord.join("");
console.log(joinWord);

let reverseWord = word.split("").reverse().join("");
console.log(reverseWord);
