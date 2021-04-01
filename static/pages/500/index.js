import { selectors } from "../../utils/constants";
const Handlebars = require("handlebars");

// Handlebars
const source = document.querySelector(selectors.template500).innerHTML;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.root500).innerHTML = html;
//
