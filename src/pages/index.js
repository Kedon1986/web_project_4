import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";

//editModal.close();
const profiletName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");

/*CARD Template*/

const cardTemplate = document.querySelector("#card").content; // Template
const card = cardTemplate.querySelector(".card").cloneNode(true);
const cardContainer = document.querySelector(".elements"); // card container

/*buttons*/
const editButton = document.querySelector(".button-edit");
const closeButton = document.querySelector(".popup__close");
const addButton = document.querySelector(".button-add");
const closeCardButton = document.querySelector(".popup__close_theme_add");
const deleteButton = document.querySelector(".card__delete-button");
const closeModal = document.querySelector(".popup__container");

/*popup*/
const profileModal = document.querySelector(".popup");
const cardPopup = document.querySelector(".popup_theme_add");
const form = document.querySelector(".popup__form");
const titleInput = document.querySelector("#input-name");
const subtitleInput = document.querySelector("#input-about");
const cardForm = document.querySelector(".popup__form_theme_add");
const imagePopup = document.querySelector(".popup_type_image-modal");
const popupImage = document.querySelector(".popup__image");

const closeImageModal = document.querySelector(
  ".popup__close_type_image-modal"
);
const modalImageTitle = document.querySelector(
  ".popup__title_type_image-modal"
);

/*card*/

/*Card Array*/

const initialCards = [
  {
    title: "McWay Falls",
    src: "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
  },
  {
    title: "Yosemite Valley",
    src: "https://images.unsplash.com/photo-1569591803741-6246fbc6934c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Arizona",
    src: "https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    alt: "",
  },
  {
    title: "Kauai",
    src: "https://images.unsplash.com/photo-1543248339-821db4a345a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    alt: "",
  },
  {
    title: "Arches National Park",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "",
  },
  {
    title: "Mill Valley, CA",
    src: "https://images.unsplash.com/photo-1431887773042-803ed52bed26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "",
  },
];

/**********************************************************functions*******************************************************/

function resetForm() {
  cardForm.reset(); // Reset all form data
  return false; // Prevent page refresh
}

/*update profile*/
function updateProfile(event) {
  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;

  closePopup(profileModal);
}

/** open profile Modal */
const editProfileModal = new Popup(".popup");
editProfileModal.setEventListeners();

/** open add-card Modal */
const addCardModal = new Popup(".popup_theme_add");
addCardModal.setEventListeners();
addButton.addEventListener("click", function () {
  addCardModal.open();
});

/**event listners*/

form.addEventListener("submit", updateProfile, false);

editButton.addEventListener("click", function () {
  editProfileModal.open();
  titleInput.value = profiletName.textContent;
  subtitleInput.value = profileAboutMe.textContent;
});

addButton.addEventListener("click", function () {
  addCardModal.open();
});

/**event listener for creating new card */
cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardTitleInput = document.getElementById("card-title");
  const cardImageInput = document.getElementById("image-link");
  const addedCard = {
    title: cardTitleInput.value,
    src: cardImageInput.value,
  };

  renderCard(addedCard, cardContainer);
  closePopup(cardPopup);
  resetForm(); // reset form
});

/** Validation  */

const addFormEl = document.querySelector("#card-form");
const editFormEl = document.querySelector("#edit-form");

const formValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, editFormEl);
editFormValidator.enableValidation();

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card").generateCard();

      cardList.addItem(card);
    },
  },
  ".elements"
);

cardList.renderItems();
