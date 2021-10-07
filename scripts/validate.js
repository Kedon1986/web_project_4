const showInputError = (inputEl, formEl, settings) => {
  const errorSpan = formEl.querySelector(`#${inputEl.id}-error`);
  errorSpan.textContent = inputEl.validationMessage;
  errorSpan.classList.add(settings.errorClass);
  inputEl.classList.add(settings.inputErrorClass);
};

const hideInputError = (inputEl, formEl, settings) => {
  const errorSpan = formEl.querySelector(`#${inputEl.id}-error`);
  errorSpan.textContent = "";
  errorSpan.classList.remove(settings.errorClass);
  inputEl.classList.remove(settings.inputErrorClass);
};

const checkInputValidity = (formEl, inputEl, settings) => {
  if (inputEl.validity.valid) {
    hideInputError(inputEl, formEl, settings);
  } else {
    showInputError(inputEl, formEl, settings);
  }
};

const hasValidInputs = (inputList) => {
  let isValid = true;
  inputList.forEach((input) => {
    if (!input.validity.valid) {
      isValid = false;
    }
  });
  return isValid;
};

const toggleButton = (inputList, submitButton, settings) => {
  submitButton.forEach((disabled) => {
    if (hasValidInputs(inputList)) {
      submitButton.disabled = false;
      disabled.classList.remove(settings.inactiveButtonClass);
    } else {
      submitButton.disabled = true;
      disabled.classList.add(settings.inactiveButtonClass);
    }
  });
};
const setEventListeners = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  let submitButton = formEl.querySelectorAll(settings.submitButtonSelector);
  submitButton.forEach((disabled) => {
    disabled.classList.add(settings.inactiveButtonClass);
  });
  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      //check validity
      checkInputValidity(formEl, inputEl, settings);
      //toggle button
      toggleButton(inputList, submitButton, settings);
    });
  });
};

/**enable validation */
const enableValidation = (settings) => {
  //select all forms
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  //prevent default on each submit
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
