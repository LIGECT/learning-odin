function createTrackerProduct(name, initialQuantity) {
  const product = {
    name: name,
  };

  let _quantity = initialQuantity;
  Object.defineProperty(product, "quantity", {
    get() {
      return _quantity;
    },

    set(newValue) {
      const old = _quantity;
      _quantity = newValue;
      console.log(
        `Изменение: '${name}' изменило количество с ${old} на ${newValue}.`
      );
    },
  });

  return product;
}

const milk = createTrackerProduct("Молоко", 10);
console.log(`Начальное кол-во молока ${milk.quantity}`);

console.log("---");

milk.quantity = 8;

milk.quantity = 15;

console.log("---");

const bread = createTrackerProduct("Хлебушек", 25);

console.log(`Начальное кол-во Хлебушка ${bread.quantity}`);

bread.quantity = 40;
