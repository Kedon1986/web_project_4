class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    console.log("clicked");
    this._popupSelector.classList.add("popup_opened");
  }

  close() {
    console.log("clicked");
    this._popupSelector.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      return closePopup(document.querySelector(".popup_opened"));
    }
  }

  setEventListeners() {
    /** open popup  */
    this._popupSelector.addEventListener("click", () => {
      this.open();
    });

    /** close popup  */
    this._popupSelector.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;
