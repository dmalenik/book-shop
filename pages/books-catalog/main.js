import container from "../../modules/container.mjs";
import addCSS from "../../modules/addCSS.mjs";

addCSS("normalize.css");
addCSS("container.css");
addCSS("utilities.css");
addCSS("booksSection.css");

document.body.appendChild(container);
