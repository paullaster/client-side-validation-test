const form = document.querySelector("form");
const textArea = document.querySelector("textarea#comment");
const inputs = document.querySelectorAll("input");

Array.from(inputs).forEach(input => {
  input.addEventListener("input", event => {
    const errorSpan = input.nextElementSibling;
    if (input.validity.valid) {
      //Reset error span
      errorSpan.textContent = "";
      return;
    }
    showError(input, errorSpan);
    //errorSpan.textContent = `${input.id}`;
  });
});

const showError = (input, error) => {
  error.className = "active";
  if (input.validity.typeMismatch) {
    error.textContent = `Invalid ${input.id}, it should be of type '${input.type}'!`;
    return;
  }
  if (input.validity.valueMissing) {
    error.textContent = `${input.id} is a required field!`;
    return;
  }
  if (input.validity.patternMismatch) {
    error.textContent = `Invalid ${input.id} pattern \n,
        ${input.id === "username"
          ? "e.g. p.admin"
          : input.id === "email"
            ? "e.g. p@bspore.com"
            : input.id === "phonenumber"
              ? "e.g." +
                "" +
                "\t" +
                "0700444500" +
                "\n" +
                "|" +
                "\t" +
                "070-044-4500" +
                "\n " +
                "|" +
                " \t" +
                "070.044.4500" +
                "\n" +
                "|" +
                "\t" +
                "070 044 4500"
              : ""}`;
    return;
  }
  if (input.validity.tooShort) {
    error.textContent = `
        ${input.id}  minimum length must be at least ${input.minLength} characters
        `;
    return;
  }
};

textArea.addEventListener("input", event => {
  const errorSpan = textArea.nextElementSibling;
  if (textArea.validity.valid) {
    errorSpan.textContent = "";
    return;
  }
  showError(textArea, errorSpan);
});

form.addEventListener("submit", event => {
  Array.from(inputs).forEach(input => {
    if (input.validity.valid) {
        if (textArea.validity.valid) {
            console.log("This is the required data in the require format!");
            return;
          }
    }
    
    if (!input.validity.valid) {
      const errorSpan = input.nextElementSibling;
      showError(input, errorSpan);
      event.preventDefault();
      return;
    }
  });
  const errorSpan = textArea.nextElementSibling;
  showError(textArea, errorSpan);
  event.preventDefault();
});
