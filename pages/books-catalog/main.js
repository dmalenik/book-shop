import createSection from "../../modules/createSection.mjs";
import getFetch from "../../modules/getFetch.mjs";

const container = document.createElement("div");

document.body.appendChild(container);

const booksCatalogPath = "../../data/books.json";

getFetch(booksCatalogPath).then((data) => {
  const bookSection = createSection("Book catalog", data);

  container.appendChild(bookSection);
});
