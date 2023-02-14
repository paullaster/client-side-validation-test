const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        if(input.validity.valid){
            const errorSpan = document.querySelectorAll("input + span.error");
        }
    })
})
