import getFetch from "./getFetch.mjs";
import createBooksSection from "./createBooksSection.mjs";
import container from "./container.mjs";

const booksCatalogPath = "../../data/books.json";

const booksCatalog = getFetch(booksCatalogPath).then((data) => {
  const section = createBooksSection("Books catalog", data);

  return container.appendChild(section);
});

export default booksCatalog;
