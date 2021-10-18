const popupImage = document.querySelector(".popup__image");
const modalImageTitle = document.querySelector(
  ".popup__title_type_image-modal"
);

const closeImageModal = document.querySelector(
  ".popup__close_type_image-modal"
);

function closeModalOnClick(evt) {
  evt.target.classList.remove("popup_opened");
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    return closePopup(document.querySelector(".popup_opened"));
  }
}

function resetForm() {
  cardForm.reset(); // Reset all form data
  return false; // Prevent page refresh
}
/**open modal*/

/**close modal*/

/**open modal*/

function openPopup(popup) {
  document.addEventListener("click", closeModalOnClick);

  document.addEventListener("keydown", closeModalOnEscape);

  popup.classList.add("popup_opened");
}

/**close modal*/

function closePopup(popup) {
  document.removeEventListener("click", closeModalOnClick);

  document.removeEventListener("keydown", closeModalOnEscape);

  //document.addEventListener(click);

  popup.classList.remove("popup_opened");
}

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._src = data.src;

    this._cardSelector = cardSelector;
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
    this._element.remove();
  }

  _handlePreviewPicture() {
    document
      .querySelector(".popup_type_image-modal")
      .classList.toggle("popup_opened");
    popupImage.src = this._element.querySelector(".card__image").src;
    popupImage.alt = `Photo of ${
      this._element.querySelector(".card__title").textContent
    }`;
    modalImageTitle.textContent =
      this._element.querySelector(".card__title").textContent;
  }

  _setEventListeners() {
    /**like button */
    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    /**delete card */
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    /**Image Popup */
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture();
      });
  }
  /** generate initial cards */
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._src;
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__image").alt = `Photo of ${this._title}`;

    return this._element;
  }
}

export default Card;
