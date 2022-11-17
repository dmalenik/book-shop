import container from "../../modules/container.mjs";
import addCSS from "../../modules/addCSS.mjs";

addCSS("normalize.css");
addCSS("global.css");
addCSS("utilities.css");
addCSS("container.css");
addCSS("booksSection.css");

document.body.appendChild(container);
