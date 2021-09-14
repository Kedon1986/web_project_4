const profiletName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

/*CARD Template*/

let cardTemplate = document.querySelector('#card').content; // Template
let card = cardTemplate.querySelector('.card').cloneNode(true);
let cardContainer = document.querySelector('.elements'); // card container
let cardImage = card.querySelector('.card__image');

/*buttons*/
let edit = document.querySelector(".button-edit");
let closed = document.querySelector(".popup__close");
let add = document.querySelector(".button-add");
let closeCard = document.querySelector(".popup__close_theme_add");

/*popup*/
let popup = document.querySelector('.popup');
let cardPopup = document.querySelector('.popup_theme_add');
let form = document.querySelector('.popup__form');
let titleInput = document.querySelector('#popup-name');
let subtitleInput = document.querySelector('#popup-about');
let cardForm = document.querySelector('.popup__form_theme_add');
let imagePopup = document.querySelector('.popup_type_image-modal');
let popupImage = document.querySelector('.popup__image');



/*Card Array*/

const initialCards = [
  {
    title: "Yosemite Valley",
    src: "./images/yosemite-valley.png"
  },
  {
    title: "Lake Louise",
    src: "./images/lake-louise.png"
  },
  {
    title: "Bald Mountains",
    src: "./images/bald-mountains.png"
  },
  {
    title: "Latemar",
    src: "./images/latemar.png"
  },
  {
    title: "Vanoise National Park",
    src: "./images/vanoise-national-park.png"
  },
  {
    title: "Lago di Braies",
    src: "./images/lago-di-braies.png"
  }
]; 

/*functions*/



function imageLike () {
  
}


/*Card Popup*/
function openCardPopup() {
  cardPopup.classList.toggle('popup_opened');
}

function closeCardPopup() {
  cardPopup.classList.toggle('popup_opened');
}


/*Profile Popup*/
function openPopup() {
  popup.classList.toggle('popup_opened');
  titleInput.value = profiletName.textContent;
  subtitleInput.value = profileAboutMe.textContent;
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

/*Add Card*/

function addCard(event) {

  event.preventDefault();

  const cardTemplate = document.querySelector('#card').content; // Template
  let card = cardTemplate.querySelector('.card').cloneNode(true);
  let cardContainer = document.querySelector('.elements'); // card container

  let cardImage = card.querySelector('.card__image');
  let cardTitle =  card.querySelector('.card__title');

  let cardTitleInput = document.getElementById('card-title');
  let cardImageInput = document.getElementById('image-link');

  cardTitle.textContent = `${cardTitleInput.value}`;
  cardImage.src = `${cardImageInput.value}`;

  cardContainer.prepend(card);

  cardTitleInput.value = '';
  cardImageInput.value = '';

let like = card.querySelector('.card__button'); 
  like.addEventListener('click',function liked(e) {
    e.target.classList.toggle('card__button_liked')
})


cardImage.addEventListener('click',function openImagePopup () {
  imagePopup.classList.toggle('popup_opened')
  popupImage.src = cardImage.src
});

  closeCardPopup();
}

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
  
  closePopup();
}

/*Create New Card*/

let createNewCard = function () {

  for(i = 0; i < initialCards.length; i ++) {
    const cardTemplate = document.querySelector('#card').content; // Template
    const card = cardTemplate.querySelector('.card').cloneNode(true);// card
    const cardContainer = document.querySelector('.elements'); // card container
    
    const cardImage = card.querySelector('.card__image');
    const cardTitle =  card.querySelector('.card__title');
   
    cardImage.src = initialCards[i].src;// card image 
    cardTitle.textContent = initialCards[i].title; // card title
    let like = card.querySelector('.card__button'); //card button
    like.addEventListener('click',function liked(e) {
      e.target.classList.toggle('card__button_liked')
    }
)

cardImage.addEventListener('click',function openImagePopup () {
  popupImage.src = cardImage.src
  imagePopup.classList.toggle('popup_opened')
})



    cardContainer.append(card);
  }
 }

 createNewCard()

/*event listners*/
form.addEventListener('submit', updateProfile, false);
edit.addEventListener("click", openPopup); 
closed.addEventListener("click", closePopup);
add.addEventListener("click", openCardPopup); 
closeCard.addEventListener("click", closeCardPopup);
cardForm.addEventListener('submit', addCard, false);
// imagePopup.addEventListener('click',openImagePopup)

