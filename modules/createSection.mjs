import createCatalog from "./createCatalog.mjs";

const createSection = (heading, data) => {
  const sectionHeading = document.createElement("h3");

  sectionHeading.innerText = heading;

  const catalog = createCatalog(data);

  const section = document.createElement("section");

  section.appendChild(sectionHeading);
  section.appendChild(catalog);

  return section;
};

export default createSection;
