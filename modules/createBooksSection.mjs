import createCatalog from "./createCatalog.mjs";

const createBooksSection = (heading, data) => {
  const sectionHeading = document.createElement("h3");

  sectionHeading.innerText = heading;

  const catalog = createCatalog(data);

  const section = document.createElement("section");

  section.setAttribute("class", "f-col f-col-center");

  section.appendChild(sectionHeading);
  section.appendChild(catalog);

  return section;
};

export default createBooksSection;
