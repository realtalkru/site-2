// const activity = document.querySelector("#activity").value;
// const goal = document.querySelector("#goal").value;
// const sex = document.querySelector(".sex-btn").value;
// eslint-disable-next-line no-use-before-define
// submit.addEventListener("click", calculate);

// const calculate = function () {
//   const ageSum = document.querySelector(".age").value * 5.7;
//   const weightSum = document.querySelector(".weight").value * 13.4;
//   const heightSum = document.querySelector(".height").value * 4.8;
//   const activity = document.querySelector("#activity").value;
//   const bmr = Math.round(88.36 + weightSum + heightSum - ageSum);
//   const amr = Math.round((88.36 + weightSum + heightSum - ageSum) * activity);
//   return amr;
// };

// submit.onclick = function getStorage() {

// };

const submit = document.querySelector(".submit");
const ageSum = document.querySelector(".age");
const output = document.querySelector(".output");
const reset = document.querySelector(".reset");

// alternate way
// submit.onclick = function () {
//   const key = ageSum.value;
//   console.log(key);
// };
const calculate = function () {};

window.addEventListener("unload", () => {
  const key = ageSum.value;
  localStorage.setItem("age", key);
});

submit.addEventListener("click", calculate);
let valueOutput = localStorage.getItem("age");
output.innerHTML = valueOutput;
ageSum.value = valueOutput;

reset.onclick = () => {
  output.innerHTML = "";
};

const localStorageValue = {};

// submit.addEventListener("click", () => {
// const key = ageSum.value;
//   console.log(key);
//   localStorage.setItem("age", key);
// });
