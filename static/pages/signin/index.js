import { selectors, classes } from "../../utils/constants";
import { formData } from "../../utils/utils";
import { signinTemplate } from "../../templates/signin-template.js";
const Handlebars = require("handlebars");

// Handlebars
const source = signinTemplate;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.rootSignin).innerHTML = html;
//

function handleFormSubmit() {
  const form = document.querySelector(".signin__form");
  const formElements = form.elements;

  Array.from(formElements).forEach((item) => {
    if (item.nodeName === "INPUT") {
      item.addEventListener("input", () => {
        if (!item.validity.valid) {
          item.nextElementSibling.classList.add(classes.signinInputErrorActive);
          item.nextElementSibling.textContent = item.validationMessage;
        } else {
          item.nextElementSibling.classList.remove(
            classes.signinInputErrorActive
          );
          item.nextElementSibling.textContent = "";
        }
      });
    }
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (form.checkValidity()) {
      formData(form);
    } else {
      Array.from(formElements).forEach((element) => {
        if (element.value === "" && element.nodeName === "INPUT") {
          element.nextElementSibling.classList.add(
            classes.signinInputErrorActive
          );
          element.nextElementSibling.textContent = element.validationMessage;
        }
      });
    }
  });
}

handleFormSubmit();
