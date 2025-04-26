const numbers = [10, -5, 0, 25, -15, 30, 8, 0, 40];
const users = [
  { id: 101, name: "Алиса", isActive: true, age: 25 },
  { id: 102, name: "Боб", isActive: false, age: 30 },
  { id: 103, name: "Чарли", isActive: true, age: 22 },
  { id: 104, name: "Дэвид", isActive: true, age: 40 },
  { id: 105, name: "Ева", isActive: false, age: 28 },
];

// let result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

// let returnMax = numbers.reduce((acc, curr) => {
//   return Math.max(acc, curr);
// });
// console.log(returnMax);

// let activeNotActive = users.reduce(
//   (counts, user) => {
//     if (user.isActive === true) {
//       counts.active++;
//     } else {
//       counts.inactive++;
//     }

//     return counts;
//   },
//   {
//     active: 0,
//     inactive: 0,
//   }
// );

// console.log(activeNotActive);

let newReduce = users.reduceRight((accumulator, current) => {
  return accumulator === "" ? current.name : current.name + ", " + accumulator;
}, "");
console.log(newReduce);
