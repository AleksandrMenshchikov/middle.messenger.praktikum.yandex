import { elements } from "../../utils/utils";

const Cleave = require("cleave.js/dist/cleave");
require("cleave.js/dist/addons/cleave-phone.ru");

new Cleave(elements.inputSignupTel, {
  phone: true,
  phoneRegionCode: "ru",
});
