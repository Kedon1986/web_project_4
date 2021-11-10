class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeModalOnEscape = this._closeModalOnEscape.bind(this);
  }
  _closeModalOnEscape(evt) {
    if (evt.key === "Escape") {
      console.log(this);
      return this.close();
    }
  }

  setEventListeners() {
    /** close popup  */
    this._popupSelector.addEventListener("click", () => {
      this.close();
    });

    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }

  open() {
    document.addEventListener("keydown", this._closeModalOnEscape);
    this._popupSelector.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("click", this._closeModalOnEscape);
    this._popupSelector.classList.remove("popup_opened");
  }
}

export default Popup;
