import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

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

/*popup*/
const profileModal = document.querySelector(".popup");
const cardPopup = document.querySelector(".popup_theme_add");
const form = document.querySelector(".popup__form");
const titleInput = document.querySelector("#input-name");
const subtitleInput = document.querySelector("#input-about");
const cardForm = document.querySelector(".popup__form_theme_add");
const imagePopup = document.querySelector(".popup_type_image-modal");

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

function closeModalOnClick(evt) {
  evt.target.classList.remove("popup_opened");
  console.log("clicked");
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function resetForm() {
  cardForm.reset(); // Reset all form data

  return false; // Prevent page refresh
}

/**open modal*/

function openPopup(popup) {
  document.addEventListener("keydown", closeModalOnEscape);

  popup.classList.add("popup_opened");
}

/**close modal*/

function closePopup(popup) {
  document.removeEventListener("keydown", closeModalOnEscape);

  //document.addEventListener(click);

  popup.classList.remove("popup_opened");
}

/*update profile*/
function updateProfile(event) {
  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;

  closePopup(profileModal);
}

function renderCard(cardEl, container) {
  /** Takes a cardEl and appends to card container */
  const card = new Card(cardEl, "#card").generateCard();
  container.prepend(card);
}

/** for each card element in [initialCards], call function renderCard and append each cardEl to cardContainer */
initialCards.forEach((cardEl) => renderCard(cardEl, cardContainer));

/**event listners*/
form.addEventListener("submit", updateProfile, false);

editButton.addEventListener("click", function () {
  openPopup(profileModal);
  titleInput.value = profiletName.textContent;
  subtitleInput.value = profileAboutMe.textContent;
});
closeButton.addEventListener("click", function () {
  closePopup(profileModal);
});
addButton.addEventListener("click", function () {
  openPopup(cardPopup);
});
closeCardButton.addEventListener("click", function () {
  closePopup(cardPopup);
});

closeImageModal.addEventListener("click", function () {
  closePopup(imagePopup);
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
