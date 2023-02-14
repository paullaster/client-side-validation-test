const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);
const errorSpan = document.querySelectorAll("input + span.error");

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        console.log(input.validity)
    })
})
