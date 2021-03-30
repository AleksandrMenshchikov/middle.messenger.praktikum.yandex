import { selectors, classes } from "../../utils/utils";
const Handlebars = require("handlebars");
const Cleave = require("cleave.js/dist/cleave");
require("cleave.js/dist/addons/cleave-phone.ru");

// Handlebars
const source = document.querySelector(selectors.signupTemplate).innerHTML;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.rootSignup).innerHTML = html;
//

// Cleave
new Cleave(document.querySelector("input[name='signup-tel']"), {
  phone: true,
  phoneRegionCode: "ru",
});
//

function handleFormSubmit() {
  const form = document.forms[0];
  const formElements = document.forms[0].elements;

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
      const obj = {};
      Array.from(formElements).forEach((elem) => {
        if (elem.nodeName === "INPUT") {
          obj[elem.name] = elem.value;
        }
      });
      console.log(obj);
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
