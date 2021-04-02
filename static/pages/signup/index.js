import { selectors, classes } from "../../utils/constants";
import { formData } from "../../utils/utils";
import { signupTemplate } from "../../templates/signup-template";
const Handlebars = require("handlebars");

// Handlebars
const source = signupTemplate;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.rootSignup).innerHTML = html;
//

function handleFormSubmit() {
  const form = document.querySelector(".signup__form");
  const formElements = form.elements;

  Array.from(formElements).forEach((item) => {
    if (item.nodeName === "INPUT") {
      item.addEventListener("input", () => {
        if (!item.validity.valid) {
          item.nextElementSibling.classList.add(classes.signupInputErrorActive);
          item.nextElementSibling.textContent = item.validationMessage;
        } else {
          item.nextElementSibling.classList.remove(
            classes.signupInputErrorActive
          );
          item.nextElementSibling.textContent = "";
        }
      });
    }
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (
      form.checkValidity() &&
      formElements[5].value === formElements[6].value
    ) {
      formElements[6].nextElementSibling.classList.remove(
        classes.signupInputErrorActive
      );
      formElements[6].nextElementSibling.textContent = "";
      formData(form);
    } else if (
      form.checkValidity() &&
      formElements[5].value !== formElements[6].value
    ) {
      formElements[6].nextElementSibling.classList.add(
        classes.signupInputErrorActive
      );
      formElements[6].nextElementSibling.textContent = "Пароли не совпадают";
    } else {
      Array.from(formElements).forEach((element) => {
        if (element.value === "" && element.nodeName === "INPUT") {
          element.nextElementSibling.classList.add(
            classes.signupInputErrorActive
          );
          element.nextElementSibling.textContent = element.validationMessage;
        }
      });
    }
  });
}

handleFormSubmit();
