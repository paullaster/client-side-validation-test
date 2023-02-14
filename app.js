const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        const errorSpan = input.nextElementSibling;
        errorSpan.innerHTML = `${input.id} is a required field!`;
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
        error.textContent = `${input.id} is a required field!`;
    }
}