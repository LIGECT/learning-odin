// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") menu[key] = menu[key] * 2;
  }
}
