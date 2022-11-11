import createSection from "../../modules/createSection.mjs";

const container = document.createElement("div");

document.body.appendChild(container);

const booksCatalogPath = "../../data/books.json";

fetch(booksCatalogPath)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const bookSection = createSection("Book catalog", data);

    container.appendChild(bookSection);
  });
