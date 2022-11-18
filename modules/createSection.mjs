const createSection = (heading) => {
  const sectionHeading = document.createElement("h3");

  sectionHeading.innerText = heading;

  const section = document.createElement("section");

  section.setAttribute("class", "f-col f-y-center");
  section.appendChild(sectionHeading);

  return section;
};

export default createSection;
