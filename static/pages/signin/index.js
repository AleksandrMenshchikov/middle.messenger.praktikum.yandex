import { selectors, classes } from "../../utils/utils";
const Handlebars = require("handlebars");

// Handlebars
const source = document.querySelector(selectors.signinTemplate).innerHTML;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.rootSignin).innerHTML = html;
//

function handleFormSubmit() {
  const form = document.forms[0];
  const formElements = document.forms[0].elements;

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
      const obj = {};
      Array.from(formElements).forEach((elem) => {
        if (elem.nodeName === "INPUT") {
          obj[elem.name] = elem.value;
        }
      });
      console.log(obj);
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
