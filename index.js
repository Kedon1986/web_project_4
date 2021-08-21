
/*header*/
const profiletName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

/*buttons*/
let edit = document.querySelector(".button-edit");
let closed = document.querySelector(".popup__close");

/*popup*/
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let titleInput = document.querySelector('.popup__name');
let subtitleInput = document.querySelector('.popup__about-me');
titleInput.value = profiletName.textContent;
subtitleInput.value = profileAboutMe.textContent;




/*functions*/
function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

function updateProfile(event) {

  event.preventDefault();

  profiletName.textContent = titleInput.value;
  profileAboutMe.textContent = subtitleInput.value;
  
  togglePopup();
}



/*event listners*/
form.addEventListener('submit', updateProfile, false);
edit.addEventListener("click", togglePopup); 
closed.addEventListener("click", closePopup);


