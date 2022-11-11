import createItemsList from "./createCardsList.mjs";

const createSection = (heading, elements) => {
  const h_3 = document.createElement("h3");

  h_3.innerText = heading;

  const catalog = createItemsList(elements);
  const section = document.createElement("section");

  section.appendChild(h_3);
  section.appendChild(catalog);

  return section;
};

export default createSection;
