import { selectors } from "../../utils/constants";
import { template500 } from "../../templates/template-500";
const Handlebars = require("handlebars");

// Handlebars
const source = template500;
const template = Handlebars.compile(source);
const html = template();
document.querySelector(selectors.root500).innerHTML = html;
//
