const users = [
  { id: 101, name: "Алиса", isActive: true, age: 25 },
  { id: 102, name: "Боб", isActive: false, age: 30 },
  { id: 103, name: "Чарли", isActive: true, age: 22 },
  { id: 104, name: "Дэвид", isActive: true, age: 40 },
  { id: 105, name: "Ева", isActive: false, age: 28 },
];

let nameUsers = users.map((item) => item.name);
console.log(nameUsers);

let userList = users.map((item) => `Пользователь: ${item.name}`);
console.log(userList);

let emailList = users.map(
  (item) => `${item.name.toLowerCase()}_${item.age}@example.com`
);
console.log(emailList);

let statusList = users.map((user) => {
  let statusValue = user.isActive ? "Активен" : "Неактивен";

  return {
    ...user,
    status: statusValue,
  };
});

console.log(statusList);
