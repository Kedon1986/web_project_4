class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._src = data.src;

    this._cardSelector = cardSelector;
  }

  _handleOpenModal(modal) {
    // document.addEventListener("click", closeModalOnClick);
    // document.addEventListener("keydown", closeModalOnEscape);
    return modal.classList.add("popup_opened");
  }

  _handleCloseModal(modal) {
    // document.addEventListener("click", closeModalOnClick);
    // document.addEventListener("keydown", closeModalOnEscape);
    return modal.classList.add("popup_opened");
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__button")
      .classList.toggle("card__button_liked");
  }

  _handleDeleteCard() {
    const cardElement = document.querySelector(".card");
    cardElement.remove();
  }

  _setEventListeners() {
    /**like button */
    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => {
        this._handleLikeButton();
        console.log("working");
      });
    /**delete card */
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
        console.log(this.card);
      });

    document.querySelector(".button-edit").addEventListener("click", () => {
      const profileModal = document.querySelector(".popup");
      _handleOpenModal(profileModal);
      // titleInput.value = profiletName.textContent;
      // subtitleInput.value = profileAboutMe.textContent;
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._src;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}

export default Card;
