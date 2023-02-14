const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        const errorSpan = document.querySelector(`${input} + span.error`);
        console.log(errorSpan)
        if(!input.validity.valid){
            
            
        }
    })
})
