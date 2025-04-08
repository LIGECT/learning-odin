const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Родительский элемент (всплытие)");
});

child.addEventListener("click", function () {
  console.log("Дочерний элемент (цель)");
});

parent.addEventListener(
  "click",
  function () {
    console.log("Родительский элемент (захват)");
  },
  true
);
