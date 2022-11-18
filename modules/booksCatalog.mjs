import getFetch from "./getFetch.mjs";
import createSection from "./createSection.mjs";
import createCatalog from "./createCatalog.mjs";
import container from "./container.mjs";

const booksCatalogPath = "../../data/books.json";
const booksCatalog = getFetch(booksCatalogPath).then((data) => {
  console.log(data);

  const section = createSection("Books catalog", 3);
  const catalog = createCatalog(data);

  section.setAttribute("class", "f-col f-y-center");
  section.appendChild(catalog);
  
  container.appendChild(section);
});

export default booksCatalog;
