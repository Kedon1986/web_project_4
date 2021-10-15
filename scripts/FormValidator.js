class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _toggleButton(inputList, submitButton) {
    if (this._hasValidInput(inputList)) {
      submitButton.disabled = false;
      submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      submitButton.disabled = true;
      disabled.classList.add(this._inactiveButtonClass);
    }
  }

  _hasValidInput(inputList) {
    let isValid = true;
    inputList.forEach((input) => {
      if (!input.validity.valid) {
        isValid = false;
      }
    });
    return isValid;
  }

  _setEventListeners() {
    const inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    let submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    submitButton.classList.add(this._inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        //check validity
        this._checkInputValidity(inputElement);
        //toggle button
        this._toggleButton(inputList, submitButton);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
