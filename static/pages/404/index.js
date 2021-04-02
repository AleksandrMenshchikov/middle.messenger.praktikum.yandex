import { selectors } from "../../utils/constants";
import { template404 } from "../../templates/template-404";
const Handlebars = require("handlebars");

// Handlebars
const source = template404;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.root404).innerHTML = html;
//
