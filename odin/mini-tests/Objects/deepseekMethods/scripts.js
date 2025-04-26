const words = ["apple", "banana", "cherry"];

function sumOfTripledEvens(words) {
  return words
    .filter((word) => word.length > 5)
    .map((word) => word.toUpperCase())
    .join(" ");
}

console.log(sumOfTripledEvens(words));
