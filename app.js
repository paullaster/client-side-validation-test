const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "form > div.controls > div.formgroup ~ input"
);

console.log(inputs.length)