import getFetch from "./getFetch.mjs";
import createSection from "./createSection.mjs";
import container from "./container.mjs";

const booksCatalogPath = "../../data/books.json";

const booksCatalog = getFetch(booksCatalogPath).then((data) => {
  const section = createSection("Books catalog", data);

  return container.appendChild(section);
});

export default booksCatalog;
