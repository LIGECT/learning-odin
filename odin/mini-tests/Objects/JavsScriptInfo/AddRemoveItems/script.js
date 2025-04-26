arr = ["apple", "banana", "orange", "grape"];
arr.splice(1, 1);
console.log(arr);
arr.splice(1, 0, "kiwi", "mango");
console.log(arr);
let myArr = arr.slice(1, 3);
console.log(myArr);

secondArr = ["pear", "pineapple"];
let cher = "cherry";

let finalArr = myArr.concat(secondArr, cher);
console.log(finalArr);
