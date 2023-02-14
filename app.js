const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);
const errorSpan = document.querySelectorAll("input + span.error");

console.log(errorSpan);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        console.log(input.validity)
    })
})
