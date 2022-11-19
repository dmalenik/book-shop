import getFetch from "./getFetch.mjs";
import createSection from "./createSection.mjs";
import createCatalog from "./createCatalog.mjs";

const booksCatalogFragment = document.createDocumentFragment();
const path = "../../data/books.json";

booksCatalogFragment.append(
  // wait for the Promise to be resolved

  await getFetch(path).then((data) => {
    const section = createSection("Books catalog", 3);
    const catalog = createCatalog(data);

    section.setAttribute("class", "f-col f-y-center");
    section.appendChild(catalog);

    return section;
  })
);

export default booksCatalogFragment;
