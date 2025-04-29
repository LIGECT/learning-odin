function unique(arr) {
  set = new Set(arr);
  return [...set];
}
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // Ожидаем кришна, харе, :-O
