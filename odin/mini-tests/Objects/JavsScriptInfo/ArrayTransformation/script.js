let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  //code
  let newArr = [...arr];
  return newArr.sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
