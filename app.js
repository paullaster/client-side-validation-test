const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        const errorSpan = document.querySelector(`${input} + span.error`);
        if(!input.validity.valid){
            
            console.log(errorSpan)
        }
    })
})
