import { selectors } from "../../utils/utils";

const Cleave = require("cleave.js/dist/cleave");
require("cleave.js/dist/addons/cleave-phone.ru");

new Cleave(selectors.inputSignupTel, {
  phone: true,
  phoneRegionCode: "ru",
});
