/*header*/
const profiletName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

/*buttons*/
let edit = document.querySelector(".button-edit");
let closed = document.querySelector(".popup__close");

/*popup*/
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let titleInput = document.querySelector('#popup-name');
let subtitleInput = document.querySelector('#popup-about');


/*functions*/
function openPopup() {
  popup.classList.toggle('popup_opened');
  titleInput.value = profiletName.textContent;
  subtitleInput.value = profileAboutMe.textContent;
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

function updateProfile(event) {

  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;
  
  closePopup();
}

/*event listners*/
form.addEventListener('submit', updateProfile, false);
edit.addEventListener("click", openPopup); 
closed.addEventListener("click", closePopup);


