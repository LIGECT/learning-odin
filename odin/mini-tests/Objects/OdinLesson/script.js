function sumOfTripledEvens(array) {
  function onlyEven(num) {
    return num % 2 == 0;
  }
  const evenNumber = array.filter(onlyEven);

  let tripledEvens = evenNumber.map((elem) => elem * 3);

  const sum = tripledEvens.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
}

const myArray = [1, 2, 3, 4, 5];

console.log(sumOfTripledEvens(myArray));
