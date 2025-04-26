let score = [85, 92, 78, 95, 88];

score.forEach((item, index, score) => {
  let result = `Студент на позиции ${index} получил ${item} баллов, всего студентов: ${score.length} `;

  if (item >= 90) {
    result += " — Отличник!";
  }

  console.log(result);
});
