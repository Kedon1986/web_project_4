import Popup from "./Popup.js";

const popupImage = document.querySelector(".popup__image");
const modalImageTitle = document.querySelector(
  ".popup__title_type_image-modal"
);

export default class PopupWithImage extends Popup {
  // open() {
  //   popupImage.src = document.querySelector(".card__image").src;
  //   popupImage.alt = `Photo of ${
  //     document.querySelector(".card__title").textContent
  //   }`;
  //   modalImageTitle.textContent =
  //     document.querySelector(".card__title").textContent;
  //   super.open();
  // }

  open({ link, name }) {
    this._popupSelector.querySelector(
      ".popup__title_type_image-modal"
    ).textContent = name;

    const image = this._popupSelector.querySelector(".popup__image");
    image.src = link;
    image.alt = `Photo of ${name}`;
    super.open();
  }
}
