import { selectors } from "../../utils/utils";
const Handlebars = require("handlebars");

// Handlebars
const source = document.querySelector(selectors.template404).innerHTML;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.root404).innerHTML = html;
//
