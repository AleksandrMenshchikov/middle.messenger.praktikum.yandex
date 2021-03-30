import { selectors, classes, elements } from "../../utils/utils";
const autosize = require("autosize");
const Handlebars = require("handlebars");

// autosize
autosize(elements.chatFooterInputText);
//

// Handlebars
const source = document.querySelector(selectors.peopleListTemplate).innerHTML;
const template = Handlebars.compile(source);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const context = { people: json };
    const html = template(context);
    document.querySelector(selectors.peopleList).innerHTML = html;
  });
//

// scrollIntoView
document.querySelector(selectors.chatMessage).scrollIntoView(false);
//

// handlers events
function handleClickButtonProfile(evt) {
  if (evt.target.closest(selectors.peopleProfileInner)) {
    elements.profile.classList.add(classes.profileActive);
  }
}

function handleClickButtonProfileBack(evt) {
  if (evt.target.closest(selectors.profileBackArrow)) {
    elements.profile.classList.remove(classes.profileActive);
  }
}

function handleClickProfileEditor(evt) {
  if (evt.target.classList.contains(classes.profileEditorInfo)) {
    evt.target
      .closest(selectors.profileEditor)
      .classList.remove(classes.profileEditorActive);
    elements.profileConfirm.classList.add(classes.profileConfirmActive);
  } else if (evt.target.classList.contains(classes.profileEditorPassword)) {
    evt.target
      .closest(selectors.profileEditor)
      .classList.remove(classes.profileEditorActive);
    elements.profileConfirmPassword.classList.add(classes.profileConfirmActive);
    elements.profileFormPassword.classList.add(
      classes.profileFormPasswordActive
    );
    elements.profileForm.classList.remove(classes.profileFormActive);
  }
}

function handleClickProfileConfirm(evt) {
  if (evt.target.classList.contains(classes.profileConfirmButtonThemeRed)) {
    elements.profileConfirm.classList.remove(classes.profileConfirmActive);
    elements.profileEditor.classList.add(classes.profileEditorActive);
    elements.profileFormPassword.classList.remove(
      classes.profileFormPasswordActive
    );
    elements.profileForm.classList.add(classes.profileFormActive);
  }
}

function handleClickProfileConfirmPassword(evt) {
  if (
    evt.target.classList.contains(classes.profileConfirmButtonPasswordThemeRed)
  ) {
    elements.profileConfirm.classList.remove(classes.profileConfirmActive);
    elements.profileEditor.classList.add(classes.profileEditorActive);
    elements.profileFormPassword.classList.remove(
      classes.profileFormPasswordActive
    );
    elements.profileForm.classList.add(classes.profileFormActive);
  }
}

function handleClickPopupAvatarClose(evt) {
  if (
    evt.target.classList.contains(classes.popupAvatarActive) ||
    evt.target.closest(selectors.popupAvatarIconClose)
  ) {
    elements.popupAvatar.classList.remove(classes.popupAvatarActive);
  }
}

function handleClickProfileAvatarOpen() {
  elements.popupAvatar.classList.add(classes.popupAvatarActive);
}

function handleSubmitAvatarForm(evt) {
  evt.preventDefault();
  const input = evt.target.querySelector(selectors.popupAvatarInput);
  const inputError = evt.target.querySelector(selectors.popupAvatarInputError);
  input.addEventListener("change", () => {
    const fileName = Array.from(input.files)[0].name;
    if (fileName) {
      elements.popupAvatarFileNameLoaded.textContent = fileName;
      elements.popupAvatarTitle.textContent = "Файл загружен";
      inputError.classList.remove(classes.popupAvatarInputErrorActive);
    } else {
      elements.popupAvatarTitle.textContent = "Ошибка, попробуйте ещё раз";
      elements.popupAvatarTitle.style.color = "#ff2f2f";
    }
  });
  if (!evt.target.checkValidity()) {
    inputError.classList.add(classes.popupAvatarInputErrorActive);
  } else {
    inputError.classList.remove(classes.popupAvatarInputErrorActive);
  }
}

function handleFocusPeopleSearchInput(evt) {
  evt.target.classList.add(classes.peopleSearchInputActive);
  elements.peopleSearchLoupe.classList.add(classes.peopleSearchLoupeActive);
  elements.peopleSearchClose.classList.add(classes.peopleSearchCloseActive);
}

function handleBlurPeopleSearchInput(evt) {
  evt.target.classList.remove(classes.peopleSearchInputActive);
  evt.target.value = "";
  elements.peopleSearchLoupe.classList.remove(classes.peopleSearchLoupeActive);
  elements.peopleSearchClose.classList.remove(classes.peopleSearchCloseActive);
}

function handleClickChatHeaderButtonDots(evt) {
  if (evt.target.closest(selectors.chatHeaderButtonDots)) {
    elements.chatHeaderAcceptUser.classList.toggle(
      classes.chatHeaderAcceptUserActive
    );
  }
}

function handleClickChatHeaderAcceptUser(evt) {
  if (evt.target.closest(selectors.chatHeaderAddUser)) {
    elements.popupAddUser.classList.add(classes.popupAddUserActive);
    elements.chatHeaderAcceptUser.classList.remove(
      classes.chatHeaderAcceptUserActive
    );
  } else if (evt.target.closest(selectors.chatHeaderDeleteUser)) {
    elements.popupDeleteUser.classList.add(classes.popupDeleteUserActive);
    elements.chatHeaderAcceptUser.classList.remove(
      classes.chatHeaderAcceptUserActive
    );
  }
}

function handleClickPopupAddUser(evt) {
  if (
    evt.target.classList.contains(classes.popupAddUserActive) ||
    evt.target.closest(selectors.popupAddUserIconClose)
  ) {
    elements.popupAddUser.classList.remove(classes.popupAddUserActive);
  }
}

function handleClickPopupDeleteUser(evt) {
  if (
    evt.target.classList.contains(classes.popupDeleteUserActive) ||
    evt.target.closest(selectors.popupDeleteUserIconClose)
  ) {
    elements.popupDeleteUser.classList.remove(classes.popupDeleteUserActive);
  }
}

function handleClickChatFooterButtonSelect(evt) {
  if (evt.target.closest(selectors.chatFooterButtonSelect)) {
    elements.chatFooterButtonsContainer.classList.toggle(
      classes.chatFooterButtonsContainerActive
    );
  }
}
//

// event listeners
elements.peopleProfileInner.addEventListener("click", handleClickButtonProfile);
elements.profileBackArrow.addEventListener(
  "click",
  handleClickButtonProfileBack
);
elements.profileAvatar.addEventListener("click", handleClickProfileAvatarOpen);
elements.popupAvatar.addEventListener("click", handleClickPopupAvatarClose);
elements.profileEditor.addEventListener("click", handleClickProfileEditor);
elements.profileConfirm.addEventListener("click", handleClickProfileConfirm);
elements.profileConfirmPassword.addEventListener(
  "click",
  handleClickProfileConfirmPassword
);
elements.popupAvatarForm.addEventListener("submit", handleSubmitAvatarForm);
elements.peopleSearchInput.addEventListener(
  "focus",
  handleFocusPeopleSearchInput
);
elements.peopleSearchInput.addEventListener(
  "blur",
  handleBlurPeopleSearchInput
);
elements.chatHeaderButtonDots.addEventListener(
  "click",
  handleClickChatHeaderButtonDots
);
elements.chatHeaderAcceptUser.addEventListener(
  "click",
  handleClickChatHeaderAcceptUser
);
elements.popupAddUser.addEventListener("click", handleClickPopupAddUser);
elements.popupDeleteUser.addEventListener("click", handleClickPopupDeleteUser);
elements.chatFooterButtonSelect.addEventListener(
  "click",
  handleClickChatFooterButtonSelect
);
//
