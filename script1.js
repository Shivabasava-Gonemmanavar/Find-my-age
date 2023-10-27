let year = 2023;
let age;
document.querySelector(".button").addEventListener("click", function () {
  const guessage = Number(document.querySelector(".mynumber").value);
  console.log(guessage, typeof guessage);
  age = year - guessage;
  document.querySelector(".myage").value = age;
});

document.querySelector(".button1").addEventListener("click", function () {
  document.querySelector(".mynumber").value = "";
  document.querySelector(".myage").value = "";
});
