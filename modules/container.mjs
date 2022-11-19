import booksCatalogFragment from "./books-catalog.mjs";

const containerFragment = document.createDocumentFragment();
const div = document.createElement("div");

div.setAttribute("class", "f-col container");
div.appendChild(booksCatalogFragment);

containerFragment.append(div);

export default containerFragment;
