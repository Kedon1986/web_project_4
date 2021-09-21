const showInputError = (input, formEl, settings) => {
  const errorSpan = formEl.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(settings.errorClass);
};

const hideInputError = (input, formEl, settings) => {
  const errorSpan = formEl.querySelector(`#${input.id}-error`);
  errorSpan.textContent = "";
  errorSpan.classList.remove(settings.errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
      //check validity
      // add error message class
      //toggle submit button
    });
  });
};

/**enable validation */
const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (event) => event.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
