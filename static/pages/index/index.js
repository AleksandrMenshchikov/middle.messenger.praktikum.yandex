import { selectors } from "../../utils/utils";

const autosize = require("autosize");
autosize(selectors.chatFooterInputText);



const profile = document.querySelector(".profile");
const profileEditor = document.querySelector(".profile__editor");
const profileConfirm = document.querySelector(".profile__confirm");
const profileConfirmPassword = document.querySelector(
  ".profile__confirm-password"
);
const profileFormPassword = document.querySelector(".profile__form-password");
const profileForm = document.querySelector(".profile__form");
const popupAvatarFileNameLoaded = document.querySelector(
  ".popup-avatar__file-name-loaded"
);
const popupAvatarTitle = document.querySelector(".popup-avatar__title");

const popupAvatar = document.querySelector(".popup-avatar");
const profileAvatar = document.querySelector(".profile__avatar");
const peopleProfileInner = document.querySelector(".people__profile-inner");
const profileBackArrow = document.querySelector(".profile__back-arrow");
const popupAvatarForm = document.querySelector(".popup-avatar__form");
const peopleSearchInput = document.querySelector(".people__search-input");
const peopleSearchLoupe = document.querySelector(".people__search-loupe");
const peopleSearchClose = document.querySelector(".people__search-close");
const chatHeaderButtonDots = document.querySelector(
  ".chat__header-button-dots"
);
const chatHeaderAcceptUser = document.querySelector(
  ".chat__header-accept-user"
);
const popupAddUser = document.querySelector(".popup-add-user");
const popupDeleteUser = document.querySelector(".popup-delete-user");
const chatFooterButtonSelect = document.querySelector(
  ".chat__footer-button-select"
);
const chatFooterButtonsContainer = document.querySelector(
  ".chat__footer-buttons-container"
);

import Handlebars from "../../vendors/handlebars/handlebars-v4.7.7";

function handleClickButtonProfile(evt) {
  if (evt.target.closest(".people__profile-inner")) {
    profile.classList.add("profile_active");
  }
}

function handleClickButtonProfileBack(evt) {
  if (evt.target.closest(".profile__back-arrow")) {
    profile.classList.remove("profile_active");
  }
}

function handleClickProfileEditor(evt) {
  if (evt.target.classList.contains("profile__editor-info")) {
    evt.target
      .closest(".profile__editor")
      .classList.remove("profile__editor_active");
    profileConfirm.classList.add("profile__confirm_active");
  } else if (evt.target.classList.contains("profile__editor-password")) {
    evt.target
      .closest(".profile__editor")
      .classList.remove("profile__editor_active");
    profileConfirmPassword.classList.add("profile__confirm_active");
    profileFormPassword.classList.add("profile__form-password_active");
    profileForm.classList.remove("profile__form_active");
  }
}

function handleClickProfileConfirm(evt) {
  if (evt.target.classList.contains("profile__confirm-button_theme_red")) {
    profileConfirm.classList.remove("profile__confirm_active");
    profileEditor.classList.add("profile__editor_active");
    profileFormPassword.classList.remove("profile__form-password_active");
    profileForm.classList.add("profile__form_active");
  }
}

function handleClickProfileConfirmPassword(evt) {
  if (
    evt.target.classList.contains("profile__confirm-button-password_theme_red")
  ) {
    profileConfirm.classList.remove("profile__confirm_active");
    profileEditor.classList.add("profile__editor_active");
    profileFormPassword.classList.remove("profile__form-password_active");
    profileForm.classList.add("profile__form_active");
  }
}

function handleClickPopupAvatarClose(evt) {
  if (
    evt.target.classList.contains("popup-avatar_active") ||
    evt.target.closest(".popup-avatar__icon-close")
  ) {
    popupAvatar.classList.remove("popup-avatar_active");
  }
}

function handleClickProfileAvatarOpen(evt) {
  popupAvatar.classList.add("popup-avatar_active");
}

peopleProfileInner.addEventListener("click", handleClickButtonProfile);
profileBackArrow.addEventListener("click", handleClickButtonProfileBack);
profileAvatar.addEventListener("click", handleClickProfileAvatarOpen);
popupAvatar.addEventListener("click", handleClickPopupAvatarClose);
profileEditor.addEventListener("click", handleClickProfileEditor);
profileConfirm.addEventListener("click", handleClickProfileConfirm);
profileConfirmPassword.addEventListener(
  "click",
  handleClickProfileConfirmPassword
);

popupAvatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const input = evt.target.querySelector(".popup-avatar__input");
  const inputError = evt.target.querySelector(".popup-avatar__input-error");
  input.addEventListener("change", () => {
    const fileName = Array.from(input.files)[0].name;
    if (fileName) {
      popupAvatarFileNameLoaded.textContent = fileName;
      popupAvatarTitle.textContent = "Файл загружен";
      inputError.classList.remove("popup-avatar__input-error_active");
    } else {
      popupAvatarTitle.textContent = "Ошибка, попробуйте ещё раз";
      popupAvatarTitle.style.color = "#ff2f2f";
    }
  });
  if (!evt.target.checkValidity()) {
    inputError.classList.add("popup-avatar__input-error_active");
  } else {
    inputError.classList.remove("popup-avatar__input-error_active");
  }
});

peopleSearchInput.addEventListener("focus", (evt) => {
  evt.target.classList.add("people__search-input_active");
  peopleSearchLoupe.classList.add("people__search-loupe_active");
  peopleSearchClose.classList.add("people__search-close_active");
});

peopleSearchInput.addEventListener("blur", (evt) => {
  evt.target.classList.remove("people__search-input_active");
  evt.target.value = "";
  peopleSearchLoupe.classList.remove("people__search-loupe_active");
  peopleSearchClose.classList.remove("people__search-close_active");
});

const source = document.querySelector("#people-list-template").innerHTML;
const template = Handlebars.compile(source);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const context = { people: json };
    const html = template(context);
    document.querySelector(".people__list").innerHTML = html;
  });

chatHeaderButtonDots.addEventListener("click", (evt) => {
  if (evt.target.closest(".chat__header-button-dots")) {
    chatHeaderAcceptUser.classList.toggle("chat__header-accept-user_active");
  }
});

chatHeaderAcceptUser.addEventListener("click", (evt) => {
  if (evt.target.closest(".chat__header-add-user")) {
    popupAddUser.classList.add("popup-add-user_active");
    chatHeaderAcceptUser.classList.remove("chat__header-accept-user_active");
  } else if (evt.target.closest(".chat__header-delete-user")) {
    popupDeleteUser.classList.add("popup-delete-user_active");
    chatHeaderAcceptUser.classList.remove("chat__header-accept-user_active");
  }
});

popupAddUser.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("popup-add-user_active") ||
    evt.target.closest(".popup-add-user__icon-close")
  ) {
    popupAddUser.classList.remove("popup-add-user_active");
  }
});

popupDeleteUser.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("popup-delete-user_active") ||
    evt.target.closest(".popup-delete-user__icon-close")
  ) {
    popupDeleteUser.classList.remove("popup-delete-user_active");
  }
});

chatFooterButtonSelect.addEventListener("click", (evt) => {
  if (evt.target.closest(".chat__footer-button-select")) {
    chatFooterButtonsContainer.classList.toggle(
      "chat__footer-buttons-container_active"
    );
  }
});

document.querySelector(".chat__message").scrollIntoView(false);
