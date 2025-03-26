var people = [
  "Крис",
  "Анна",
  "Колин",
  "Терри",
  "Фил",
  "Лола",
  "Сём",
  "Кай",
  "Брюс",
];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Пригласить: ";
refused.textContent = "Не приглашать(!): ";

for (var i = 0; i < people.length; i++) {
  if (people[i] === "Фил" || people[i] === "Лола") {
    refused.textContent += people[i] + ", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }
}

admitted.textContent = admitted.textContent.slice(0, -2) + ".";
refused.textContent = refused.textContent.slice(0, -2) + ".";
