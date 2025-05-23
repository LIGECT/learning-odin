let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);
console.log(usersById["john"].name);
