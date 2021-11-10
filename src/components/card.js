import PopupWithImage from "./PopupWithImage.js";

function resetForm() {
  cardForm.reset(); // Reset all form data
  return false; // Prevent page refresh
}
/**open modal*/

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._cardSelector = cardSelector;
    this._src = data.src;
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
    new PopupWithImage(".popup_type_image-modal").open({
      link: this._src,
      name: this._title,
    });
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
