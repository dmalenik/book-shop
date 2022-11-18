const createSection = (heading, headingSize) => {
  let sectionHeading = document.createElement(`h${headingSize}`);

  sectionHeading.innerText = heading;

  const section = document.createElement("section");

  section.appendChild(sectionHeading);

  return section;
};

export default createSection;
