const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        const errorSpan = input.nextElementSibling;
        if(input.validity.valid){
            //Reset error span
            errorSpan.textContent ='';
            return;
        }
        showError (input, errorSpan)
        //errorSpan.textContent = `${input.id}`;
    })
})

const showError = (input, error) => {
    error.className = 'active';
    if(input.validity.typeMismatch){
        error.textContent = `Invalid ${input.id}, it should be of type ${input.type}!`;
        return;
    }
    if(input.validity.valueMissing){
        error.textContent = `${input.id} is a required field!`;
        return;
    }
    if(input.validity.patternMismatch){
        error.textContent = `${input.id} is a required field!`;
        return;
    }
}