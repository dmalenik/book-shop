import container from "../../modules/container.mjs";

import normalize from "../../assets/styles/normalize.css" assert { type: "css" };
import global from "../../assets/styles/global.css" assert { type: "css" };
import utilities from "../../assets/styles/utilities.css" assert { type: "css" };
import containerCSS from "../../assets/styles/container.css" assert { type: "css" };
import booksSectionCSS from "../../assets/styles/booksSection.css" assert { type: "css" };

document.adoptedStyleSheets = [
  normalize,
  global,
  utilities,
  containerCSS,
  booksSectionCSS,
];

document.body.appendChild(container);
