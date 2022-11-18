import getFetch from "./getFetch.mjs";
import createSection from "./createSection.mjs";
import createCatalog from "./createCatalog.mjs";
import container from "./container.mjs";

const booksCatalogPath = "../../data/books.json";
const booksCatalog = getFetch(booksCatalogPath).then((data) => {
  const section = createSection("Books catalog");
  const catalog = createCatalog(data);

  section.appendChild(catalog);
  container.appendChild(section);
});

export default booksCatalog;
