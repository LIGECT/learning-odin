let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  const filtered = arr.filter((number) => {
    return number >= a && number <= b;
  });

  return filtered;
}

console.log(filtered);

console.log(arr);
