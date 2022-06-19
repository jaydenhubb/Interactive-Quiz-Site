const answers = ["A", "B", "A", "A"];

const form = document.querySelector(".form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const chosenAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  chosenAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);

  result.classList.remove("d-none");

  let i = 0;
  const time = setInterval(() => {
    result.querySelector("span").textContent = `${i}%`;
    if (i === score) {
      clearInterval(time);
    } else {
      i++;
    }
  }, 10);
});
