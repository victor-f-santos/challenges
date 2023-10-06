console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const allData = new FormData(event.target);
  const data = Object.fromEntries(allData);

  console.log(data);

  form.reset();

  event.target.elements.firstName.focus();

  console.log(data.age);
  console.log(data.badness);

  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );
});
