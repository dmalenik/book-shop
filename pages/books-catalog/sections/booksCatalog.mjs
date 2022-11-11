import getFetch from "../../../modules/getFetch.mjs";
import createSection from "../../../modules/createSection.mjs";
import container from "./container.mjs";

const booksCatalogPath = "../../data/books.json";

getFetch(booksCatalogPath).then((data) => {
  const bookSection = createSection("Book catalog", data);

  container.appendChild(bookSection);
});

export * as booksCatalog from "./booksCatalog.mjs";
