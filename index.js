const profiletName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

/*CARD Template*/

const cardTemplate = document.querySelector('#card').content; // Template
const card = cardTemplate.querySelector('.card').cloneNode(true);
const cardContainer = document.querySelector('.elements'); // card container


/*buttons*/
const editButton = document.querySelector(".button-edit");
const closeButton = document.querySelector(".popup__close");
const addButton = document.querySelector(".button-add");
const closeCardButton = document.querySelector(".popup__close_theme_add");

/*popup*/
const profileModal = document.querySelector('.popup');
const cardPopup = document.querySelector('.popup_theme_add');
const form = document.querySelector('.popup__form');
const titleInput = document.querySelector('#popup-name');
const subtitleInput = document.querySelector('#popup-about');
const cardForm = document.querySelector('.popup__form_theme_add');
const imagePopup = document.querySelector('.popup_type_image-modal');
const popupImage = document.querySelector('.popup__image');
const closeImageModal = document.querySelector('.popup__close_type_image-modal')
const modalImageTitle = document.querySelector('.popup__title_type_image-modal')



/*card*/



/*Card Array*/

const initialCards = [{
    title: "Yosemite Valley",
    src: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    alt: ""
  },
  {
    title: "Lake Louise",
    src: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    alt:""
  },
  {
    title: "Bald Mountains",
    src: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    alt: ""
  },
  {
    title: "Latemar",
    src: "https://code.s3.yandex.net/web-code/latemar.jpg",
    alt: ""
  },
  {
    title: "Vanoise National Park",
    src: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    alt: ""
  },
  {
    title: "Lago di Braies",
    src: "https://code.s3.yandex.net/web-code/lago.jpg",
    alt: ""
  }
];

/**********************************************************functions*******************************************************/

/**open modal*/

function resetForm() {
  cardForm.reset();  // Reset all form data
  return false; // Prevent page refresh
}

function openPopup (popup) {
  return popup.classList.add('popup_opened');
}
/**close modal*/
function closePopup(popup) {
  return popup.classList.remove('popup_opened');
}

/*Add Card*/


/*remove card*/

function removeCard() {
  let card = document.querySelector(".card");
  card.remove();
}

/*update profile*/
function updateProfile(event) {

  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;

  closePopup(profileModal);
}


function createCard (cardEl) {
  const cardTemplate = document.querySelector('#card').content; //card emplate
  const card = cardTemplate.querySelector('.card').cloneNode(true); //card

  const cardImage = card.querySelector('.card__image'); //card image reference
  const cardTitle = card.querySelector('.card__title'); //card title reference

  const likeButton = card.querySelector('.card__button'); // like button


  const modalImageTitle = document.querySelector('.popup__title_type_image-modal')
  const imagePopup = document.querySelector('.popup_type_image-modal');

  cardImage.src = cardEl.src; // card image 
  cardTitle.textContent = cardEl.title; // card title
  cardImage.alt = `Photo of ${cardEl.title}`; // image description

  /**like button click */
  function handleLikeClick(e) { 
    e.target.classList.toggle('card__button_liked')
  }
  likeButton.addEventListener('click', handleLikeClick);

  /**image button click */
  cardImage.addEventListener("click", function () {
    openPopup(imagePopup)
    popupImage.src = cardImage.src
    modalImageTitle.textContent = cardTitle.textContent
  });

  return card;
}


function renderCard (cardEl, container) {
  /** Takes a cardEl and appends to card container */
  container.append(createCard(cardEl));
}

/** for each card element in [initialCards], call function renderCard and append each cardEl to cardContainer */
initialCards.forEach(cardEl => renderCard (cardEl, cardContainer));
 

/**event listners*/
form.addEventListener('submit', updateProfile, false);

editButton.addEventListener("click", function () {
  openPopup(profileModal)
  titleInput.value = profiletName.textContent;
  subtitleInput.value = profileAboutMe.textContent;
});
closeButton.addEventListener("click", function () {
  closePopup(profileModal)
});
addButton.addEventListener("click", function () {
  openPopup(cardPopup)
});
closeCardButton.addEventListener("click", function () {
  closePopup(cardPopup)
});

cardForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const cardImage = card.querySelector('.card__image');
  const cardTitle =  card.querySelector('.card__title');
  const cardTitleInput = document.getElementById('card-title');
  const cardImageInput = document.getElementById('image-link');
  const addCard = {title: cardTitleInput.value, src: cardImageInput.value, alt: `Photo of ${cardTitleInput.value}` }
  cardContainer.prepend(createCard(addCard))
  closePopup(cardPopup);
  resetForm()
})
closeImageModal.addEventListener('click', function closeImagePopup() {
  imagePopup.classList.toggle('popup_opened')
})



