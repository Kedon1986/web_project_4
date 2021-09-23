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

function closeModalEvent(modal) {
  modal.addEventListener("click", (e) => {
    e.target.classList.remove("popup_opened");
  });
}

closeModalEvent(cardPopup);
closeModalEvent(profileModal);
closeModalEvent(imagePopup);

function closeModalOnEsc(target) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      target.classList.remove("popup_opened");
    }
  });
}

closeModalOnEsc(cardPopup);
closeModalOnEsc(profileModal);
closeModalOnEsc(imagePopup);

function resetForm() {
  cardForm.reset(); // Reset all form data
  return false; // Prevent page refresh
}
/**open modal*/

function openPopup(popup) {
  return popup.classList.add("popup_opened");
}
/**close modal*/
function closePopup(popup, ...args) {
  return popup.classList.remove("popup_opened");
}

/*update profile*/
function updateProfile(event) {
  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;

  closePopup(profileModal);
}

function createCard(cardEl) {
  const cardTemplate = document.querySelector("#card").content; //card emplate
  const card = cardTemplate.querySelector(".card").cloneNode(true); //card
  const deleteButton = card.querySelector(".card__delete-button");

  const cardImage = card.querySelector(".card__image"); //card image reference
  const cardTitle = card.querySelector(".card__title"); //card title reference

  const likeButton = card.querySelector(".card__button"); // like button

  const modalImageTitle = document.querySelector(
    ".popup__title_type_image-modal"
  );
  const imagePopup = document.querySelector(".popup_type_image-modal");

  cardImage.src = cardEl.src; // card image
  cardTitle.textContent = cardEl.title; // card title
  cardImage.alt = `Photo of ${cardEl.title}`; // image description

  /**like button click */
  function handleLikeClick(e) {
    e.target.classList.toggle("card__button_liked");
  }
  likeButton.addEventListener("click", handleLikeClick);

  /**image button click */
  cardImage.addEventListener("click", function () {
    openPopup(imagePopup);
    popupImage.src = cardImage.src;
    popupImage.alt = `Photo of ${cardEl.title}`;
    modalImageTitle.textContent = cardTitle.textContent;
  });

  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  return card;
}

function renderCard(cardEl, container) {
  /** Takes a cardEl and appends to card container */
  container.append(createCard(cardEl));
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

/**event listener for creating new card */
cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardTitleInput = document.getElementById("card-title");
  const cardImageInput = document.getElementById("image-link");
  const addedCard = {
    title: cardTitleInput.value,
    src: cardImageInput.value,
  };
  cardContainer.prepend(createCard(addedCard));
  closePopup(cardPopup);
  resetForm(); // reset form
});
closeImageModal.addEventListener("click", function () {
  closePopup(imagePopup);
});
