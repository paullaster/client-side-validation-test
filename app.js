const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input"
);

Array.from(inputs).forEach( (input) => {
    input.addEventListener("input", (event) => {
        const errorSpan = input.nextElementSibling;
        console.log(errorSpan)
        if(input.validity.valid){
            //Reset error span
            errorSpan.textContent ='';
            return;
        }
    })
})
